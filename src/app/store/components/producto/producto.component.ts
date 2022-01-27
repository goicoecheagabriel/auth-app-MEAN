import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  animations: [
    trigger( 'aniProducto', [
      state( 'inactive', style( {
        transform: 'scale(1)'
      } ) ),
      state( 'active', style( {
        transform: 'scale(1.05)'
      } ) ),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('400ms ease-out')),
    ] ),
    trigger( 'aniName', [
      state( 'inactive', style( {
        color:'rgb(33, 37, 41)'
      } ) ),
      state( 'active', style( {
        color:'#00b6cf'
      } ) ),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('400ms ease-out')),
    ] )
  ]
})
export class ProductoComponent implements OnInit {
  public state: string = 'inactive';

  @Input() producto: Producto = {
    id: 0,
    thumbnailUrl: '',
    name: '',
    price: 0,
    url: '',
    createTimestamp: 0,
    updateTimestamp: 0,
    enabled: true,
    imageUrl: '',
    originalImageUrl: '',
    description: '',
    media: {
      images: [
        {
          id: '',
          isMain: true,
          imageOriginalUrl: '',
        },
      ],
    },
  };

  constructor( private _router:Router ) { }

  ngOnInit(): void {
  }

  toggleImage( state:string ){
    // this.state = this.state === 'active' ? 'inactive' : 'active';
    this.state = state;
  }

  abrirDetalle(event:Event){
    const url: string = this.producto.url;
    const posicion: number = url.indexOf('#');
    const destino: string = url.substring(posicion);

    console.log("URL:", destino);
    if(posicion === -1) return;
    this._router.navigateByUrl(`/store${destino}`);
    // this._router.navigate(['/store',destino])


  }

}
