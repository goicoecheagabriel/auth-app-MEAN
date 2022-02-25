import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  options: any;
  overlays!: any[];
  ruta = [
    {
      titulo:'',
      ruta:'/'
    },
    {
      titulo:'',
      ruta:'/contact'
    }
   ]

  contactForm: FormGroup = this.fb.group({
    nombre:   ['',[Validators.required, Validators.minLength(3)]],
    email:    ['',[Validators.required,Validators.email]],
    mensaje:  ['',[Validators.required, Validators.minLength(30), Validators.maxLength(256)]],
  })

  constructor( private fb:FormBuilder,
               private contactoService: ContactoService,
               private _translate: TranslateService  ){

  }

  ngOnInit() {
      this.options = {
          center: {lat: 40.44037976583327, lng: -3.8149501574627265},
          zoom: 16
      };

      this._translate.get( ['store_contact_002', 'store_contact_003'] )
      .subscribe( translations => {
        this.ruta[0].titulo = translations['store_contact_002'];
        this.ruta[1].titulo = translations['store_contact_003'];
      } )


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
