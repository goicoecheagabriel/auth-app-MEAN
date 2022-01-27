import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { MenuStateService } from '../../services/menu-state.service';
import { CarritoService } from '../../services/carrito.service';


declare global {
  interface Window { ec: any; }
}


@Component({
  selector: 'app-search-sup',
  templateUrl: './search-sup.component.html',
  styleUrls: ['./search-sup.component.css']
})
export class SearchSupComponent implements OnInit {

  itemsEnCarrito: number = 0;

  searchForm: FormGroup = this.fb.group({
    search: [ '', [ Validators.minLength(3)] ]
  })

  constructor( private _renderer2: Renderer2,
               @Inject( DOCUMENT ) private _document:Document,
               private fb: FormBuilder,
               private menuState: MenuStateService,
               private carritoService: CarritoService ) { }

  ngOnInit(): void {
    let storeId: number = environment.storeId;
     let script = this._renderer2.createElement('script');

     script.setAttribute( 'data-cfasync', 'false');
     script.setAttribute( 'type', 'text/javascript' );
     script.setAttribute( 'src', `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2021-12-21` );
     script.setAttribute( 'charset', 'utf-8' );

    script.onload = this.injectEcwidCestaAdicional();

  }



  ngDoCheck(): void {

    this.carritoService.cantItemsEnCarrito.subscribe((carritoCantItems)=>{

      this.itemsEnCarrito = carritoCantItems;
    });


  }

  openMenu(){
    this.menuState.open();
    console.log("Abrimos el menu");
  }

  buscar(){
    if( this.searchForm.invalid ){
      this.searchForm.markAllAsTouched();
      console.log("Mensaje con error de parametro invalido")
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese un mínimo de 3 caracteres en el buscador.',
        timer: 4000
      })
      return;
    }
    console.log("Buscar...", this.searchForm.get('search')?.value.trim());
    let key = this.searchForm.get('search')?.value.trim();
    this.searchForm.reset();

    window.location.href = `/store#!/~/search/keyword=${ key }`
  }

  injectEcwidCestaAdicionalA(){

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
