import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productos-table-metrics',
  templateUrl: './productos-table-metrics.component.html',
  styleUrls: ['./productos-table-metrics.component.css']
})
export class ProductosTableMetricsComponent {

  @Input('unregisteredVisitor') unregisteredVisitor : boolean = false;
  @Input('producTables')        producTables!       : any;

  panelActive: boolean = false;
  selectedProducto: any = {};

  constructor() { }

  onRowSelect_productos(event:any) {
    console.log(this.selectedProducto)
  }

  onRowUnselect_productos(event:any) {
    return;
  }

}
