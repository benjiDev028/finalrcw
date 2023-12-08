import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CriminelsService } from 'src/app/services/criminels.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criminel-add',
  templateUrl: './criminel-add.component.html',
  styleUrls: ['./criminel-add.component.css']
})
export class CriminelAddComponent  {
  criminelForm = new FormGroup({
    nom: new FormControl('', Validators.required), // Le champ 'nom' est requis
    description: new FormControl(''), // Pas de validateurs pour 'description'
    crimeCommis: new FormControl('', Validators.required), // Le champ 'crimeCommis' est requis
    derniereApparition: new FormControl(''), // Pas de validateurs pour 'derniereApparition'
    dureeRecherche: new FormControl(''), // Pas de validateurs pour 'dureeRecherche'
  });
  selectedFiles: File[] = [];

  constructor(private criminelsservice : CriminelsService, private router  : Router){

  }

  onFileSelect(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFiles = event.target.files;
    }
  }
  getSafeValue(value: any): string {
    return value == null ? '' : value;
  }

  onSubmit() {

    const formData = new FormData();

    // Ajouter les champs de formulaire à formData
    formData.append('nom', this.getSafeValue(this.criminelForm.get('nom')?.value));
    formData.append('description', this.getSafeValue(this.criminelForm.get('description')?.value));
    formData.append('crimeCommis', this.getSafeValue(this.criminelForm.get('crimeCommis')?.value));
    formData.append('derniereApparition', this.getSafeValue(this.criminelForm.get('derniereApparition')?.value));
    formData.append('dureeRecherche', this.getSafeValue(this.criminelForm.get('dureeRecherche')?.value));

    // Ajouter les fichiers images
    for (let file of this.selectedFiles) {
      formData.append('images', file, file.name);
    }

    // Envoyer formData à votre API backend
    this.criminelsservice.create(formData).subscribe({
      next: () => console.log("ajout fait"),
      error: (error: any) => {
          if (error.error.error) {
              alert(error.error.error);
          } else {
              alert('Une erreur est survenue lors de l ajout . Veuillez réessayer.');
          }
      },
      complete: () => this.router.navigate(['/listCriminels'])
    });
  }

}
