import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {
  id: string = "";
  eventosRouter: any;
  visitante: any = {
    idProductVisaulized : null,
    country   : "",
    city      : "",
    ip        : "",
    language  : navigator.language,
    host      : location.host,
    href      : location.href,
    origin    : location.origin,
    pathname  : location.pathname,
    port      : location.port,
    protocol  : location.protocol,
    search    : location.search || "nulo",
    userAgent : navigator.userAgent,
    referrer  : document.referrer,
    id: this.id
  };

  constructor( private _http: HttpClient,
               private _router: Router ) {

                this.eventosRouter = this._router.events

                this.eventosRouter.subscribe( (event:Event) => {
                  if ( event instanceof NavigationEnd ){
                    this.visitante.href       = location.origin + event.url;
                    this.visitante.language   = navigator.language;
                    this.visitante.host   = location.host;
                    this.visitante.origin   = location.origin;
                    this.visitante.pathname   = location.pathname;
                    this.visitante.port   = location.port;
                    this.visitante.protocol   = location.protocol;
                    this.visitante.search   = location.search || "undefined";
                    this.visitante.userAgent   = navigator.userAgent;
                    this.visitante.referrer   = document.referrer;
                    // this.visitante.idProductVisaulized = false;
                    this.getIpAddress()
                      .subscribe( (v:any) => {
                        this.visitante.ip = v.ip;
                        this.visitante.city = v.city;
                        this.visitante.country = v.country_name;

                        // console.log(":::::",this.visitante);
                      } );
                    this.registerVisitante();
                    // console.log(":::EVENT:URL",event.url)
                  }
                } )

   }


   newVisitante( idProductVisaulized?: number ) {
    idProductVisaulized ? this.visitante.idProductVisaulized = idProductVisaulized : this.visitante.idProductVisaulized = null;

     this._http.post(`${ environment.baseMetric }/visitante/new`, this.visitante)
     .subscribe( (resp: any) => {
       let idLocal = localStorage.getItem( 'tracking' );
        if ( idLocal === resp.id ) {
          return;
        }

        localStorage.setItem( 'tracking', resp.id );

      } );
      this.visitante.idProductVisaulized = null;
    }

    setProductoVisitado( idProduct: any ) {
      console.log(":::PRODUCTO:VISITADO", idProduct);
      this._http.post( `${ environment.baseMetric }/visitante/setProductoVisitado`, {idProduct} )
        .subscribe()
    }

    registerVisitante(){
      const idLocal = localStorage.getItem( 'tracking' );
        if ( idLocal ) {
          this.id = idLocal;
          this.visitante.id = idLocal;
        }

        if( this.visitante.idProductVisaulized === null )
          this.newVisitante();
    }

  getIpAddress(){
    return this._http
      .get( 'https://freegeoip.app/json/' )
      // .get( 'https://api.ipify.org/?format=json' )
      .pipe(
        catchError( this.handleError )
      )
  }

  private handleError( error: HttpErrorResponse ){

    if( error.error instanceof ErrorEvent ) {
      // Se producjo un error del lado del cliente o de la red. Manejarlo en consecuencia.
      console.error( 'An error ocurred:', error.error.message );

    } else {
      // El backend devolvió un código de respuesta fallida
      // El cuerpo de la respuesta puede tener pistas sobre lo que salió mal.
      console.error(
        `Backend returned code ${ error.status }`,
        `body was: ${ error.error }`
      );

    }

    // devolver un observable con un mensaje de error de cara al usuario
    return throwError(
      'Algo ha salido mal en la recuperación de la ip.'
    )
  }

  ngOnDestroy(): void {
   this.eventosRouter;

  }

}
