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
	crimecommis : '',
  derniereApparition : '',
  dureeRecherche : '',
  statut : '',
  image :''

  };
  selectedImage: File | undefined;

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



  // getCriminel(CRIMINELID : any) {
    // this.criminelsservice.getById(this.CRIMINELID ).subscribe({
    //   next: (data: Criminel | any) => {
    //     if (data) {
    //       const dataArray: Criminel[] = [data];
    //       const unCriminel = dataArray.find(f => f.CRIMINELID  === this.CRIMINELID );
    //       if (unCriminel) {
    //         console.log('L\'admin a été récupéré avec succès : ', unCriminel);
    //       } else {
    //         console.log('Aucun administrateur trouvé avec cet ID.');
    //       }
    //     } else {
    //       console.log('Les données sont vides ou ne sont pas au format attendu.');
    //     }
    //   },
    //   error: (e) => {
    //     console.log('Erreur lors de la récupération de l\'admin : ', e);
    //   },
    //   complete: () => {
    //     console.log(this.criminel);
    //   }
    // });

  // Ajoutez ici la logique pour la mise à jour du criminel avec le formulaire


}
}
