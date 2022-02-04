import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PropsGeneralService } from './props-general.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollTopService {
  cancelGlobal: boolean = false;

  constructor( private _propsGeneralService: PropsGeneralService ) {

   }

   ngOnInit(): void {

  }

  scrollTop( elemento:HTMLElement, separador?: number, cancelable?:boolean ){

    if(cancelable && this.cancelGlobal) {
      this.cancelGlobal = false;
      return;
    };

    this.cancelGlobal = true;
    separador = separador || 40

      let valorTop = elemento.getBoundingClientRect().top;

      let altoHeader = this._propsGeneralService.altoHeader;

      window.scrollTo( 0, valorTop + window.scrollY - ( altoHeader + separador ) )

      setTimeout(() => {
        this.cancelGlobal=false;
      }, 200);

  }
}
