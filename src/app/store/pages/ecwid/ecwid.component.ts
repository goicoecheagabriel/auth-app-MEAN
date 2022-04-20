import { Component, OnInit, ElementRef } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Carrito } from '../../interfaces/carrito.interface';
import { VisitanteService } from '../../services/visitante.service';

declare var window: any;
declare var Ecwid: any;
// declare var xProductBrowser:any;
// declare var cargarStore:any;


@Component({
  selector: 'app-ecwid',
  templateUrl: './ecwid.component.html',
  styleUrls: ['./ecwid.component.css']
})
export class EcwidComponent implements OnInit {

  storeId: number = environment.storeId;

  constructor( private _elementRef: ElementRef,
               private _visitanteService: VisitanteService) {}

  ngOnInit(): void {
    const etiqueta = document.getElementById('xProductEtiqueta');
    // console.log(":::ETIQUETA", etiqueta)
    if( etiqueta ) {
      // etiqueta.remove();
      location.reload();
    }
    if (localStorage.getItem('store-load') == "true") {
      localStorage.setItem("store-load","false");
      location.reload()
    }



  }

  ngAfterViewInit() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.id = "tienda-store";
    s.charset = "utf-8";
    s.setAttribute( 'data-cfasync', 'false' );
    s.src = "https://app.ecwid.com/script.js?54091005&data_platform=code&data_date=2020-02-17";
    this._elementRef.nativeElement.appendChild(s);
    s.onload = () => {
      this.injectEcwidCestaAdicional(this._elementRef);
    }

  }

  injectEcwidCestaAdicional(_elementRef:ElementRef){

    let cargarTienda = ()=>{
      const s = document.createElement('script');
      s.type = "text/javascript";
      s.id = 'xProductEtiqueta';
      s.charset = "utf-8";
      s.setAttribute( 'data-cfasync', 'false' );
      s.text = `
        xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${this.storeId}")
        `
      this._elementRef.nativeElement.appendChild(s);
      localStorage.setItem('store-load',"true")
    }

    cargarTienda();

     // para cada cambio del carrito actualizamos localStorage con el contenido
     var callback = function(cart:Carrito){
      window.localStorage.setItem('carrito-service', JSON.stringify( cart ));
    }

     Ecwid.OnCartChanged.add(callback);

     Ecwid.OnPageLoaded.add( (page:any) => {
      if ( page.type === 'PRODUCT' ) {
        // this._visitanteService.setProductoVisitado(page.productId);
        this._visitanteService.newVisitante(page.productId);
      }
     } )

  }

  ngOnDestroy(): void {
    Ecwid.destroy();
  }


}
