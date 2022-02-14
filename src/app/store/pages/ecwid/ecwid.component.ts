import { Component, OnInit, Renderer2, OnChanges, NgZone, OnDestroy } from '@angular/core';

import { environment } from 'src/environments/environment';
import { EcwidService } from '../../services/ecwid.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { PlatformLocation } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../interfaces/carrito.interface';

declare var window: any;
declare var Ecwid: any;
declare var xProductBrowser:any;


@Component({
  selector: 'app-ecwid',
  templateUrl: './ecwid.component.html',
  styleUrls: ['./ecwid.component.css']
})
export class EcwidComponent implements OnInit, OnChanges, OnDestroy {

  storeId: number = environment.storeId;
  navigationSubscription: Subscription;



  constructor( public ecwidService: EcwidService,
              //  private _renderer2:Renderer2,
              //  private route: ActivatedRoute,
               private _router: Router,
               private platformLocation: PlatformLocation,
               private ngZone: NgZone ) {
    this.platformLocation.onPopState( (a) => {
      if( this.platformLocation.pathname.startsWith('/store') ) {
        this.ngZone.run( () => {
          console.warn("Reloading component ECWID",a)


        } )
      }
    } );

    this.platformLocation.onHashChange((a)=>{
        this.ngZone.run( () => {
          console.warn("Reloading component ECWID:::hash",a)


         } )
    } )

    //Suscribirse a los eventos del enrutador
    this.navigationSubscription = this._router.events.subscribe( ( e:any ) =>{
      // Si se trata de un evento de NavigationEnd, reinicie el componente
      if( e instanceof NavigationEnd ) {
        this.initialiseInvites()
      }
    } )


   }



   initialiseInvites(){
  }

  ngOnInit(): void {

    // para cada cambio del carrito actualizamos localStorage con el contenido
    var callback = function(cart:Carrito){
      window.localStorage.setItem('carrito-service', JSON.stringify( cart ));
    }
    Ecwid.OnCartChanged.add(callback);

    // recreamos la tienda de ecwid cada vez que se activa el componente
    console.warn(":::ngOnInit::ecwid.component");
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    console.log("TYPEOFF ECWID", typeof Ecwid)
    if (typeof Ecwid !== 'undefined') {
    // if (typeof Ecwid != 'undefined' && typeof Ecwid.destroy == 'function'){
      console.log("pasamos por destroy");
      Ecwid.destroy();

    }
    window._xnext_initialization_scripts = [{
      widgetType: 'ProductBrowser',
      id: 'my-store-54091005',
      arg: ["id=productBrowser"]
    }];

    //xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-54091005");




  }

  ngDoCheck(){
  }

  ngOnChanges(){
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe()
    Ecwid.destroy();
  }


}
