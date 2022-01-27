import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _productos!: Producto[];

  constructor( private http: HttpClient ) {


   }



  getProductos(): Observable<Producto[]|any> {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
      params:{
        limit:18,
        attribute_portada: 'true,oferta',
        // sortBy: "PRICE_DESC"
        //category: 92775439
        // attribute_lifestyle: 'Soccer'
      }
    };
    return this.http.get<Producto[]|any>( `${environment.apiEcwid}/products?token=${environment.apiKeyEcwid}`, options )
    .pipe(retry(1), catchError(this.handleError));
  }

  getProducto(id:number): Observable<Producto> {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      },
      params:{
        // limit:6,
        // attribute_lifestyle: 'Soccer',
        // sortBy: "PRICE_DESC"
        //category: 92775439
        // attribute_lifestyle: 'Soccer'
      }
    };
    return this.http.get<Producto>( `${environment.apiEcwid}/products/${id}?token=${environment.apiKeyEcwid}`, options )
    .pipe(
      retry( 1 ),
      catchError( this.handleError )
     )
  }

  get productos(): Producto[] {
    return [...this._productos];
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get client-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
