import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsVisitedForUser } from 'src/app/protected/dashboard/interfaces/productsVisitedForUser.inerface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor( private _http: HttpClient ) { }


  getAllProductsVisitedForUser( idClient: string ):any {
    const path = ` ${ environment.baseMetric }/query/getProductsVisited `
    return this._http.post<ProductsVisitedForUser>( path, {id: idClient} );
  }

  getAllVisitants():any {
    const path = `${ environment.baseMetric }/query/getVisitantes`;
    return this._http.get( path );
  }

}
