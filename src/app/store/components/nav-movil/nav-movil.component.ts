import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Menu } from '../../interfaces/menu.interface';
import { MenuStateService } from '../../services/menu-state.service';
import menuPrincipal from '../../utilities/menu.utility.json';


@Component({
  selector: 'app-nav-movil',
  templateUrl: './nav-movil.component.html',
  styleUrls: ['./nav-movil.component.css']
})
export class NavMovilComponent implements OnInit, DoCheck {

  menu: Menu = menuPrincipal;
  menuOpen: boolean = true;

  constructor( private menuState: MenuStateService ) {

  }

  ngOnInit(): void {



  }

  ngDoCheck() {
      this.menuOpen = this.menuState.getState;
  }

  stopPropagation( event:Event ){
    console.log("NUNCA PASO",event);
    event.stopPropagation();
    // event.preventDefault();
  }



  close(event:any){

    console.log(":::MENU:::CLOSE");
    this.menuState.close();

    // event.target?.classList.indexOf('overlay')
    // event.stopPropagation();
    // event.preventDefault();
  }

  toggleMenu(){
    console.log(":::MENU:::CLICK:::");
  }

}
