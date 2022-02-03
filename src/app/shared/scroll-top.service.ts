import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollTopService {
  static y: number = 0;

  constructor( private _router:Router ) {

   }

  scrollTop(){
      this._router.events.subscribe( (evt)=> {
        if ( !(evt instanceof NavigationEnd) ){
          return;
        }

        window.scrollTo(0,ScrollTopService.y);
      } )

  }
}
