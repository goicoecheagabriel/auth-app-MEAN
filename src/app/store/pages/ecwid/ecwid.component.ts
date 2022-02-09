import { Component, OnInit, Renderer2, OnChanges, NgZone, OnDestroy } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Carrito } from '../../interfaces/carrito.interface';

declare var window: any;
declare var Ecwid: any;
declare var xProductBrowser:any;


@Component({
  selector: 'app-ecwid',
  templateUrl: './ecwid.component.html',
  styleUrls: ['./ecwid.component.css']
})
export class EcwidComponent implements OnInit {

  storeId: number = environment.storeId;

  constructor() {
  }

  ngOnInit(): void {

    // para cada cambio del carrito actualizamos localStorage con el contenido
    var callback = function(cart:Carrito){
      window.localStorage.setItem('carrito-service', JSON.stringify( cart ));
    }

    Ecwid.OnCartChanged.add(callback);

    // Ecwid.init();
    xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-54091005");

  }

  ngOnDestroy(): void {
    // Ecwid.destroy();
  }


}
