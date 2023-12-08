// crimineledit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CriminelsService } from 'src/app/services/criminels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Criminel } from 'src/app/Models/criminel.model';

@Component({
  selector: 'app-crimineledit',
  templateUrl: './crimineledit.component.html',
  styleUrls: ['./crimineledit.component.css']
})
export class CrimineleditComponent implements OnInit {
  CRIMINELID : any;
  // criminelForm = new FormGroup({
  //   nom: new FormControl('', Validators.required),
  //   description: new FormControl(''),
  //   crimeCommis: new FormControl('', Validators.required),
  //   derniereApparition: new FormControl(''),
  //   dureeRecherche: new FormControl(''),
  // });

  criminel: Criminel = {

  nom: '',
  description :'',
	crimeCommis : '',
  derniereApparition : '',
  dureeRecherche : '',
  statut : '',
  images :''

  };
  selectedImage: File[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private criminelsservice: CriminelsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.CRIMINELID = this.route.snapshot.paramMap.get('id'); // Assurez-vous que 'id' est correct
    console.log('CRIMINELID :', this.CRIMINELID);
    if (this.CRIMINELID) {
      this.getCriminel(this.CRIMINELID);
    } else {
      console.error('CRIMINELID est null ou undefined');
    }
    this.getCriminel(this.route.snapshot.paramMap.get('id'));
  }

  getCriminel(CRIMINELID: any): void {
    this.criminelsservice.getById(CRIMINELID).subscribe({
      next: (data: any) => {
        // Si la réponse est un objet avec une propriété `criminel`.
        this.criminel = data.criminel;
        console.log('Criminel récupéré avec succès:', this.criminel);
      },
      error: (e) => {
        console.error('Erreur lors de la récupération du criminel:', e);
      }
    });

}
onImagesSelected(event: any): void {
  if (event.target.files && event.target.files.length > 0) {
    this.selectedImage = Array.from(event.target.files);
    // Ici, vous pouvez également prévisualiser les images si nécessaire
  }
}
delete(): void{
  if(this.CRIMINELID && confirm("etes vous sur de vouloir supprimer criminel ?")){
    this.criminelsservice.delCriminel(this.CRIMINELID).subscribe({
      next : (data: Criminel)=>{
        console.log('criminel ',data,'a ete supprime');

      },error: (error: any) => {
        if (error.error.error) {
            alert(error.error.error);
        } else {
            alert('Une erreur est survenue lors de suppression . Veuillez réessayer.');
        }
    },
    });
    this.router.navigate(['/listCriminels'])
  }
}

update(): void {
  const formData = new FormData();

  // Ajoutez les propriétés textuelles du criminel
  formData.append('nom', this.criminel.nom);
  formData.append('description', this.criminel.description);
  formData.append('crimeCommis', this.criminel.crimeCommis);
  formData.append('derniereApparition', this.criminel.derniereApparition);
  formData.append('dureeRecherche', this.criminel.dureeRecherche);
  formData.append('statut', this.criminel.statut);


  if (this.selectedImage) {
    this.selectedImage.forEach((file) => {
      formData.append('images', file, file.name);
    });
  }

  // Envoi des données via le service
  this.criminelsservice.updateCriminel(this.CRIMINELID, formData).subscribe({
    next: (response) => {
      console.log('Criminel mis à jour avec succès', response);
      this.router.navigate(['/listCriminels']); // Redirection après la mise à jour
    },
    error: (error: any) => {
      if (error.error.error) {
          alert(error.error.error);
      } else {
          alert('Une erreur est survenue lors de suppression . Veuillez réessayer.');
      }
  }
  });
}
annuler() : void{
  this.router.navigate(['/listCriminels']);
}
}


