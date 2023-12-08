import { Component,OnInit } from '@angular/core';
import { CriminelsService } from 'src/app/services/criminels.service';
@Component({
  selector: 'app-criminel-list',
  templateUrl: './criminel-list.component.html',
  styleUrls: ['./criminel-list.component.css']
})
export class CriminelListComponent implements OnInit {
  criminels :any;
   ngOnInit(): void {
    this.listCriminels();
   }

   constructor(private criminelservice :CriminelsService){}


   listCriminels(){
    this.criminelservice.getAll().subscribe(data => {
      this.criminels = data.criminels; // Accès direct aux criminels
    })
  }



   }

