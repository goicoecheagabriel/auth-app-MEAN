import { DoCheck, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carrito } from '../interfaces/carrito.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  public carrito!: Carrito;

  constructor() {
    if (this.carrito)this.actualizar();
  }

  get cantItemsEnCarrito(): Observable<number> {
    this.actualizar();
    if( !this.carrito ) of(0);
    return of(this.carrito?.items?.length || 0);
  }

  actualizar(){

    var carritoRecuperado = window.localStorage.getItem('carrito-service');

    setTimeout(() => {
    }, 500);
    if ( carritoRecuperado ){
      this.carrito = JSON.parse(carritoRecuperado);
    }
  }


}

