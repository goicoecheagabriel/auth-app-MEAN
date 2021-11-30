import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor( private http: HttpClient) { }

  registro( name: string, email: string, password: string ) {

    const url = `${ environment.baseUrl }/auth/new`;
    const body = { name, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap( ({ ok, token }) => {
          if( ok ) {
            localStorage.setItem('token', token!);
            // this._usuario = {
            //   name: resp.name!,
            //   uid: resp.uid!,
            //   email: resp.email!
            // }
          }
        } ),
        map( valid => valid.ok ),
        catchError( err => of( err.error.msg ) )
      )
  }

  login( email: string, password: string) {

    const url = `${ this.baseUrl }/auth`
    const body = { email, password};

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ ok, token }) => {
          console.log('LOGIN SERVICE', ok, token)
          if ( ok ) {
            localStorage.setItem( 'token',token! );
            // this._usuario = {
            //   name: resp.name!,
            //   uid: resp.uid!,
            //   email: resp.email!
            // }
          }
        } ),
        map( valid => valid.ok ),
        catchError( err => of(err.error.msg) )
      )
  }


  validarToken() {
    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set( 'x-token', localStorage.getItem( 'token' )  || '' );
    return this.http.get<AuthResponse>( url, { headers } )
      .pipe(
        map( resp => {
          console.log("REVALIDAR SERVICE", resp)
          localStorage.setItem( 'token',resp.token! );
          if (resp.ok) {
            this._usuario = {
              name: resp.name!,
              uid: resp.uid!,
              email: resp.email!
            }
          }
          return resp.ok;
        } ),
        catchError( err => of(false) )
      )
  }

  logout() {
    localStorage.clear();
    // podriamos solo remover el token de esta manera
    // localStorage.removeItem('token');
  }

}