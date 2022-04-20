import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articulos-destacados',
  templateUrl: './articulos-destacados.component.html',
  styleUrls: ['./articulos-destacados.component.css']
})
export class ArticulosDestacadosComponent implements OnInit {

  productos:any = [];

  constructor( private _productosService: ProductosService ) { }

  // Get productos list
  loadProductos(){

    let response = this._productosService.getProductos()
      .subscribe( data => {
        // console.log(data);
        this.productos = data.items;
      } )
    return response;
  }


  ngOnInit(): void {
    this.loadProductos();
  }



}
