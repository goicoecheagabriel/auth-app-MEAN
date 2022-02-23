import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SuscriptorService } from '../../services/suscriptor.service';
import Swal from 'sweetalert2';
import { Suscriptor } from '../../interfaces/suscriptor.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscribe',
  templateUrl: './suscribe.component.html',
  styleUrls: ['./suscribe.component.css']
})
export class SuscribeComponent implements OnInit {

  suscrito: boolean = false;

  suscriptorForm: FormGroup = this._fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    acepta: [ '', [ Validators.requiredTrue ] ]
  })

  constructor( private _suscriptorService: SuscriptorService,
               private _fb: FormBuilder,
               private _translate: TranslateService ) { }

  ngOnInit(): void {



  }

  registrar(){
    if( this.suscriptorForm.invalid ) {
      Swal.fire({
        title: this._translate.instant('store_suscribe_009'),
        text: this._translate.instant('store_suscribe_010')
      })

      return;
    }

    this._suscriptorService.registrar(
      {
        email: this.suscriptorForm.get('email')?.value,
        name: "indeterminado",
        origen: "https:nowsneakers.com",
        aceptaPublicidad: this.suscriptorForm.get('acepta')?.value
      }
    )
      .subscribe( (suscripcion:Suscriptor|any) => {
        console.log(":::SUSCRIPCION:::",suscripcion);

        let errMensaje;
        Object.entries( suscripcion ).forEach( ([key, value]) =>{
            if ( key === 'msg' ) {
              errMensaje = value;
              return;
            }

            if ( key === 'errors' ) {
              Object.entries( suscripcion.errors ).forEach(([key, value]) =>{
                  errMensaje = suscripcion?.errors[key]?.msg;
              })
            }
          } )

        if( !suscripcion.ok ){
          Swal.fire({
            title: "Atención",
            // text: errMensaje,
            html: `<div">${ errMensaje }</dir>`
          })

          return;
        }

        if( suscripcion.ok ) this.suscrito = true;

      } )


  }

}
