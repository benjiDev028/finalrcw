
import snowflake.connector as sf
from config import Myuser, myAccount, Mypassword
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

def get_snowflake_connection():
    return sf.connect(
        user=Myuser,
        password=Mypassword,
        account=myAccount
    )

app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def login():
    data = request.json
    print(data)
    nom_utilisateur = data.get('NomUtilisateur')
    mot_de_passe = data.get('MotDePasse')

    if not nom_utilisateur or not mot_de_passe:
        return jsonify({'error': 'Missing username or password'}), 400

    try:
        conn = get_snowflake_connection()
        cs = conn.cursor()
        query = """
        SELECT NOMUTILISATEUR, MOTDEPASSE FROM "RCW"."PUBLIC"."UTILISATEURS" 
        WHERE NOMUTILISATEUR = %s AND MOTDEPASSE = %s
        """
        cs.execute(query, (nom_utilisateur.strip(), mot_de_passe.strip()))
        result = cs.fetchone()

        if result:
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401

    except Exception as e:
        # Log the exception for debugging purposes
        app.logger.error('Failed to authenticate user', exc_info=e)
        # Return a generic error message to the client
        return jsonify({'error': 'An error occurred during login'}), 500

    finally:
        cs.close()
        conn.close()

   

    

@app.route('/signup', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def signup():
    data = request.json
    nom_utilisateur = data.get('NomUtilisateur')
    mot_de_passe = data.get('MotDePasse')  # Assume this will be hashed
    role = data.get('Role')

    try:
        conn = get_snowflake_connection()
        cs = conn.cursor()

        # Vérifier d'abord si l'utilisateur existe déjà
        query = """
        SELECT NOMUTILISATEUR FROM "RCW"."PUBLIC"."UTILISATEURS" 
        WHERE NOMUTILISATEUR = %s
        """
        cs.execute(query, (nom_utilisateur,))
        result = cs.fetchone()

        if result:
            return jsonify({'message': 'Vous avez déjà un compte'}), 409
        else:
            # Insertion du nouvel utilisateur
            insert_query = """
            INSERT INTO "RCW"."PUBLIC"."UTILISATEURS" (NOMUTILISATEUR, MOTDEPASSE, ROLE) VALUES (%s, %s, %s)
            """
            cs.execute(insert_query, (nom_utilisateur, mot_de_passe, role))
            conn.commit()

            return jsonify({'message': 'Compte créé avec succès'}), 201

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

    finally:
        cs.close()
        conn.close()


if __name__ == '__main__':
    app.run(debug=True)
