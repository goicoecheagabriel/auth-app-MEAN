import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnInit, Renderer2 } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcwidService implements OnInit {

  storeId: number = environment.storeId;
  script!: any;
  renderer!: Renderer2;
  storeLoad: boolean = false;


  constructor(  @Inject (DOCUMENT ) private _document: Document ) { }

  ngOnInit(): void {

  }


  cargarStoreA() {
    this.script = this.renderer.createElement('script');
    this.script.setAttribute( 'type', 'text/javascript' );
    this.script.setAttribute( 'id', 'tienda-store' );
    this.script.setAttribute( 'charset', 'utf-8' );
    this.script.setAttribute( 'data-cfasync', 'false' );
    this.script.setAttribute( 'src', `https://app.ecwid.com/script.js?${this.storeId}&data_platform=code&data_date=2020-02-17` );

    this.renderer.appendChild( this._document.head, this.script );
    //this.script.onload = this.injectEcwidProductBrowser( environment.storeId );
    //this.script.onload = this.injectEcwidCestaAdicional();

    console.log('probando');
  }



  public injectEcwidProductBrowser(storeId:any) {
    this.storeLoad = true;
    return function () {
      const ecwidBrowserScript = document.createElement("script");
      ecwidBrowserScript.setAttribute("type", "text/javascript");
      ecwidBrowserScript.setAttribute("charset", "utf-8");
      ecwidBrowserScript.setAttribute("id", "xProduct");
      ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");`;
      document.head.appendChild(ecwidBrowserScript);

    };

  }

  injectEcwidCestaAdicional(){

    return function () {
      const ecwidInitCestaScript = document.createElement('script');

      ecwidInitCestaScript.setAttribute('type', 'text/javascript');
      ecwidInitCestaScript.text =`
      Ecwid.init();
      window.ec = window.ec || Object();
      window.ec.config = window.ec.config || Object();
      window.ec.config.store_main_page_url = "${environment.dominioBase}/store";
      console.log("WINDOW EC",window.ec);
      `
      document.head.appendChild( ecwidInitCestaScript );

    }
  }


}

