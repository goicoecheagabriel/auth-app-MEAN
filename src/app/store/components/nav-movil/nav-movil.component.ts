import { Component, DoCheck, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Menu } from '../../interfaces/menu.interface';
import { MenuStateService } from '../../services/menu-state.service';
import menuPrincipal from '../../utilities/menu.utility.json';


@Component({
  selector: 'app-nav-movil',
  templateUrl: './nav-movil.component.html',
  styleUrls: ['./nav-movil.component.css']
})
export class NavMovilComponent implements OnInit, DoCheck {

  menu!: Menu;
  menuOpen: boolean = true;

  constructor( private menuState: MenuStateService,
    private _translate: TranslateService ) {

      let lng = this._translate.getBrowserLang();
    let exist = this.UrlExists(`../../../../assets/data/nav/menu.${ lng }.utility.json`);

    import(`../../../../assets/data/nav/menu.${exist?lng:'en'}.utility.json`).then( m => { return this.menu = m
    } );

  }

  UrlExists(url:string) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
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
