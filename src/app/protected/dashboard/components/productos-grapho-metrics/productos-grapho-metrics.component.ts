import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Network } from 'vis-network';

@Component({
  selector: 'app-productos-grapho-metrics',
  templateUrl: './productos-grapho-metrics.component.html',
  styleUrls: ['./productos-grapho-metrics.component.css']
})
export class ProductosGraphoMetricsComponent implements OnInit {

  @Input('unregisteredVisitor')         unregisteredVisitor :boolean = false;
  @Input ('nodes')                      nodes               :any = [];
  @Input('edges')                       edges               :any = [];
  @Input('options')                     options             :any = [];
  @Input('panelActive')                 panelActive!        :boolean;
  @ViewChild('app', { static: false })  app!                :ElementRef;
  public                                networkInstance!    :Network;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.cargarGraphos()
  }

  cargarGraphos() {
    if ( !this.unregisteredVisitor && this.panelActive ) {
      this.networkInstance = new Network(
        this.app.nativeElement,
        { nodes: this.nodes, edges: this.edges },
        this.options
      );
      this.networkInstance.fit();
      this.options.nodes.mass = 1;
      this.networkInstance.setOptions( this.options );
      this.networkInstance.on('click', (e) => {

      });
    }
  }

}
