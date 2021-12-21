import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

declare global {
  interface Window { ec: any; }
}

@Component({
  selector: 'app-search-sup',
  templateUrl: './search-sup.component.html',
  styleUrls: ['./search-sup.component.css']
})
export class SearchSupComponent implements OnInit {

  constructor( private _renderer2: Renderer2,
               @Inject( DOCUMENT ) private _document:Document ) { }

  ngOnInit(): void {
    let storeId: number = environment.storeId;
    // let script = this._renderer2.createElement('script');

    // script.setAttribute( 'data-cfasync', 'false');
    // script.setAttribute( 'type', 'text/javascript' );
    // script.setAttribute( 'src', `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2021-12-21` );
    // script.setAttribute( 'charset', 'utf-8' );

    //script.onload = this.injectEcwidCestaAdicional();

    // this._renderer2.appendChild( this._document.body, script );



  }

  injectEcwidCestaAdicional(){


    return function () {
      const ecwidInitCestaScript = document.createElement('script');

      ecwidInitCestaScript.setAttribute('type', 'text/javascript');
      ecwidInitCestaScript.text =`
      Ecwid.init();
      window.ec = window.ec || Object();
      window.ec.config = window.ec.config || Object();
      window.ec.config.store_main_page_url = "http://localhost:4001/store";
      console.log("WINDOW EC",window.ec);
      `




      document.head.appendChild( ecwidInitCestaScript );

    }
  }

}
