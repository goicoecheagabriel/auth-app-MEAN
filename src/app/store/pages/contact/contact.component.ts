import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';
import Swal from 'sweetalert2';

import { MigaDePan } from '../../interfaces/migaDePan.interface';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  options: any;
  overlays!: any[];

  contactForm: FormGroup = this.fb.group({
    nombre:   ['',[Validators.required, Validators.minLength(3)]],
    email:    ['',[Validators.required,Validators.email]],
    mensaje:  ['',[Validators.required, Validators.minLength(30), Validators.maxLength(256)]],
  })

  constructor( private fb:FormBuilder,
               private contactoService: ContactoService,
               private _scrollT:ScrollTopService,
               private _router: Router ){

  }

  ngOnInit() {
      this.options = {
          center: {lat: 40.44037976583327, lng: -3.8149501574627265},
          zoom: 16
      };

      console.log(this._router.url);
      setTimeout(() => {
        if( this._router.url == '/contact' ) {
          this.scrollNow(15);
        }
      }, 1000);

  }

  // showResponse( evento:any ){
  //   console.log(":::reCAPCHA:::", evento);
  // }

  scrollNow( y:number ){
      ScrollTopService.y = y;
      this._scrollT.scrollTop();
  }

  enviar(){
    if( this.contactForm.invalid ){
      this.contactForm.markAllAsTouched();
      return;
    }


    console.log(":::ENVIAR:SUBMIT:FORM", this.contactForm.value);

    this.contactoService.crearContacto( {...this.contactForm.value, origen:'https://nowsneakers.com'} )
      .subscribe( resp => {
        Swal.fire({
          title: 'Contacto',
          html: `Respuesta: ${resp}.`,
          // html: `Hola ${this.contactForm.get('nombre')?.value}, tu mensaje ha sido enviado, te contestaremos a la brevedad posible.`,
          timer: 6000
        })

      } )




    this.contactForm.reset({
      nombre: '',
      email: '',
      mensaje: ''
    })

  }

  isInvalid(campo:string){
    return this.contactForm.get(campo)?.errors
      && this.contactForm.get(campo)?.touched;
  }

}
