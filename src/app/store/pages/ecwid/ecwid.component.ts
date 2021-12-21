import { Component, OnInit, Inject, Renderer2, ChangeDetectorRef, OnChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ecwid',
  templateUrl: './ecwid.component.html',
  styleUrls: ['./ecwid.component.css']
})
export class EcwidComponent implements OnInit, OnChanges {

  storeId: number = environment.storeId;

  constructor( private _renderer2: Renderer2,
               @Inject(DOCUMENT) private _document: Document ) { }

  ngOnInit(): void {
    //let storeId = environment.storeId;
    let script = this._renderer2.createElement('script');

    script.setAttribute( 'type', 'text/javascript' );
    script.setAttribute( 'charset', 'utf-8' );
    script.setAttribute( 'data-cfasync', 'false' );
    script.setAttribute( 'src', `https://app.ecwid.com/script.js?${this.storeId}&data_platform=code&data_date=2020-02-17` );

    script.onload = this.injectEcwidProductBrowser(this.storeId);


    this._renderer2.appendChild( this._document.body, script );

  }

  ngOnChanges(){
    this.injectEcwidProductBrowser( this.storeId )
  }


  private injectEcwidProductBrowser(storeId:any) {

    return function () {
      const ecwidBrowserScript = document.createElement("script");
      ecwidBrowserScript.setAttribute("type", "text/javascript");
      ecwidBrowserScript.setAttribute("charset", "utf-8");
      ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");`;
      document.head.appendChild(ecwidBrowserScript);
    };

  }



}
