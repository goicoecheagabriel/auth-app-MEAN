import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropsGeneralService {

  get altoHeader():number{
    let value = document.querySelector('.superponer-header')?.getBoundingClientRect().height
    return value!;
  }

  get altoMensajeHeader():number {
    let value = document.querySelector('.mensajes')?.getBoundingClientRect().height;;
    return value!;
  }

  constructor() { }
}
