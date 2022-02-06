import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Menu } from '../../interfaces/menu.interface';
import menuPrincipal from '../../utilities/menu.utility.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  menu: Menu = menuPrincipal;


  constructor( ) {
    console.log(this.menu)
    // menuPrincipal.secciones[0].titulo="Mi titulo"
  }

  ngOnInit(): void {
    console.warn(":::ngOnInit:::nav.component")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn(":::ngOnChanges:::nav.component")
  }



}


