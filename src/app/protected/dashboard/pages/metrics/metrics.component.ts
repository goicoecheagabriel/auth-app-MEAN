import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSet } from 'vis-data';

import { MetricsService } from 'src/app/store/services/metrics.service';
import { ProductsVisitedForUser } from '../../interfaces/productsVisitedForUser.inerface';
import { Visitante } from '../../interfaces/visitante.interface';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  @ViewChild('app', { static: false }) app!   :ElementRef;

  unregisteredVisitor     : boolean = true;
  panelActive             : boolean = false;
  selectedProducto        : any = {};
  selectedVisitante       : any = {};
  visitantes              : any = [];
  nodes                   : any;
  edges                   : any;
  producTables            : any = [];
  options                 : any;

  constructor(private _metricsService: MetricsService) { }

  ngOnInit(): void {
    this._metricsService.getAllVisitants()
      .subscribe((v:Visitante)=> this.visitantes = v);

    this.loadOptions();
   }

  getAllProductsVisitedForUser() {

    this.unregisteredVisitor = false;
    this.nodes = [];
    this.edges = [];
    this._metricsService.getAllProductsVisitedForUser(this.selectedVisitante._id)
      .subscribe((graph: ProductsVisitedForUser) => {

        if (graph.ok) {
          this.nodes = new DataSet<any>(graph.data!.nodes);
          this.edges = new DataSet<any>(graph.data!.edges);

          let productos = graph.data!.nodes;
          this.producTables = productos.filter((data:any) => {
            return data.titulo === 'Product'
          })

        }
      }, (e:any) => {
        this.unregisteredVisitor = true;
      })


  }


  onRowSelect_productos(event:any) {
    // console.log(":::onRowSelect_productos:", this.producTables)
  }
  onRowUnselect_productos(event:any) {
    return;
  }

  onRowSelect(event: any) {
    this.getAllProductsVisitedForUser();
  }

  onRowUnselect(event: any) {
    return;
  }

  loadOptions() {

    this.options = {
      height: '100%',
      width: '100%',
      nodes: {
        shape: 'hexagon',
        font: {
          color: 'grey',
        },
        mass: 1.5,
        color: '#0DCAF0'
      },
      edges: {
        color: 'grey',
        smooth: false,
        arrows: {
          to: {
            enabled: true,
            type: 'vee',
          },
        },

      },
      interaction: {
        navigationButtons: false,
        keyboard: {
          enabled: true,
          speed: {
            x: -1,
            y: -1,
            zoom: 0.02
          },
          bindToWindow: false
        } // Habilitar atajos de teclado
      },
      physics: {
        stabilization: true,

      }
    }

  }

  setActivaPanel(e:any){
      if (e?.index === 1 || true) {
      this.panelActive = true;
      }
  }

}
