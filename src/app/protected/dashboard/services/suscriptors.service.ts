import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Suscriptor } from '../interfaces/suscriptores.interface';

@Injectable({
  providedIn: 'root'
})
export class SuscriptorsService {

  constructor( private _http: HttpClient ) { }

  getSuscriptors(): Observable<any> {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }

    return this._http.get<Suscriptor>( `${ environment.baseUrl }/suscriptor/getAll`, options )
      .pipe( retry(1) )
  }

}
