import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsVisitedForUser } from 'src/app/protected/dashboard/interfaces/productsVisitedForUser.inerface';
import { Visitante } from 'src/app/protected/dashboard/interfaces/visitante.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor( private _http: HttpClient ) { }


  getAllProductsVisitedForUser( idClient: string ):Observable<ProductsVisitedForUser> {
    const path = ` ${ environment.baseMetric }/query/getProductsVisited `
    return this._http.post<ProductsVisitedForUser>( path, {id: idClient} );
  }

  getAllVisitants():Observable<Visitante> {
    const path = `${ environment.baseMetric }/query/getVisitantes`;
    return this._http.get<Visitante>( path );
  }

}
