import { Component, OnInit } from '@angular/core';
import { SuscriptorsService } from '../../services/suscriptors.service';
import { Suscriptor } from '../../interfaces/suscriptores.interface'

@Component({
  selector: 'app-suscriptors',
  templateUrl: './suscriptors.component.html',
  styleUrls: ['./suscriptors.component.css']
})
export class SuscriptorsComponent implements OnInit {

  suscriptores!: Suscriptor[];
  cols: any = [
  { field:"_id", header:"Id" },
  { field:"email", header:"Email" },
  { field:"name", header:"Nombre" },
  { field:"aceptaPublicidad", header:"Publicidad" },
  { field:"validado", header:"Validado" }
]
selectedProducts!: Suscriptor[];
  constructor( private _suscriptorsService: SuscriptorsService ) { }

  ngOnInit(): void {

    this._suscriptorsService.getSuscriptors()
      .subscribe( suscriptores => this.suscriptores = suscriptores.data )

    setTimeout(() => {
      console.log(":::SUSCRIPTORES",this.suscriptores)
    }, 3000);

  }



}
