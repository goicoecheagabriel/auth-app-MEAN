import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscriptor } from '../interfaces/suscriptor.interface';

@Injectable({
  providedIn: 'root'
})
export class SuscriptorService {
  private baseUrl: string = environment.baseUrl;
  private _suscriptor!: Suscriptor;

  get suscriptor() {
    return { ...this._suscriptor };
  }

  constructor( private _http: HttpClient ) { }

  registrar( body: {} ) {
    const url = `${ this.baseUrl }/suscriptor/new`;
    // const body = { email, name, origen, validado, aceptaPublicidad };
    const headers = new HttpHeaders()
      .set( 'x-token', environment['x-token'] )

    // return this._http.post<Suscriptor>( url, body,{headers} )

    return this._http.post<Suscriptor>( url, body, { headers } )
    .pipe(
      tap( ({ ok }) => {
        console.log(":::OK:::", ok);
      } ),
      map( registro => registro ),
      catchError( ({ error }) => of( error ) )
    );
  }
}
