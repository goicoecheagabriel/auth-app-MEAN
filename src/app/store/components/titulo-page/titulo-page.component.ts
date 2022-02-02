import { Component, OnInit } from '@angular/core';
import { MigaDePan } from '../../interfaces/migaDePan.interface';

@Component({
  selector: 'app-titulo-page',
  templateUrl: './titulo-page.component.html',
  styleUrls: ['./titulo-page.component.css']
})
export class TituloPageComponent implements OnInit {
  rutas:MigaDePan[];
  titulo: string = "Contacto"

  constructor() {
    this.rutas = [
      {
        titulo: 'Store',
        ruta: '/'
      },
      {
        titulo: 'Contacto',
        ruta: '/contact'
      }
    ]
   }

  ngOnInit(): void {
  }

}
