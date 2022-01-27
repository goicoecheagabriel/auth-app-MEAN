import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuStateService {

  private menuOpen:boolean = false;



  constructor() { }

  get getState():boolean{
    return this.menuOpen;
  }

  open(){
    this.menuOpen = true;
  }

  close(){
    this.menuOpen = false;
  }


}

