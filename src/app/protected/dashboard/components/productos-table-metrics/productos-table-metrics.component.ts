import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productos-table-metrics',
  templateUrl: './productos-table-metrics.component.html',
  styleUrls: ['./productos-table-metrics.component.css']
})
export class ProductosTableMetricsComponent {

  panelActive: boolean = false;
  // @ViewChild('app', { static: false }) app!: ElementRef;
  @Input('unregisteredVisitor') unregisteredVisitor: boolean = false;
  @Input('producTables') producTables!: any;
  selectedProducto: any = {};

  constructor() {
    console.log(this.producTables)
   }

  onRowSelect_productos(event:any) {
    console.log(this.selectedProducto)
  }

  onRowUnselect_productos(event:any) {
    return;
  }




}
