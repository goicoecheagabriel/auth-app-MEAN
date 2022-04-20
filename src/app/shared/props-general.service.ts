import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropsGeneralService {

  get altoHeader():number{
    let value = document.querySelector('.superponer-header')?.getBoundingClientRect().height;
    if ( value! < 168 ){
      value = 170; // con este valor mínimo aseguramos que el separador no permita que se corte el contenido del content
    }

    return value!;
  }

  get altoMensajeHeader():number {
    let value = document.querySelector('.mensajes')?.getBoundingClientRect().height;
    return value!;
  }

  constructor() { }
}
