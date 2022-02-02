import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private baseUrl: string = environment.baseUrl;
  private _contacto!: Contacto;

  get contacto(){
    return { ...this._contacto };
  }

  constructor( private _http:HttpClient ) { }

  crearContacto( body: Contacto ) {
    const url = `${ this.baseUrl }/contacto/new`;
    const headers = new HttpHeaders()
      .set( 'x-token', environment['x-token'] );

    return this._http.post<Contacto>( url, body, { headers } )
      .pipe(
        tap( ({ ok }) => {
          console.log(":::OK:::", ok);
        } ),
        map( contacto => contacto ),
        catchError( ({error}) => of(error) )
      )
  }

}
