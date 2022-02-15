import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollTopService } from './shared/scroll-top.service';

// declare var window: any;
// declare var Ecwid: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authApp';

  constructor( private router:Router,
               private _scrollTopService: ScrollTopService ){}


  ngOnInit(): void {

    this.router.events.subscribe( (evt)=> {
      if ( !(evt instanceof NavigationEnd) ){
        return;
      }

      this.scrollTop();
    } )

  }

  scrollTop(){
    // Se realiza un timeout para asegurarse que este scroll intente accionarse luego que cualquier otro, ya que este es cancelable.
    setTimeout(() => {
      // Hacemos que el scroll se fije en el panel donde cargamos la info
      this._scrollTopService.scrollTop(document.getElementsByTagName('html')[0],0,true)
    }, 10);

  }
}
