import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import { environment } from 'src/environments/environment';
import { MetricsService } from 'src/app/store/services/metrics.service';
import { ProductsVisitedForUser } from '../../interfaces/productsVisitedForUser.inerface';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {


  config: any = {
    container_id: "app",
    server_url: environment.neovis.server_url,
    server_user: environment.neovis.server_user,
    server_password: environment.neovis.server_password,
    labels: {
      //"Character": "name",
      "Visitante": {
        "caption": "_id",
        "size": 10.0,
        "community": "community",
        "image": 'https://visjs.org/images/visjs_logo.png',
        "title_properties": [
          "name",
          "pagerank"
        ],
        //"sizeCypher": "MATCH (n) WHERE id(n) = {id} MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
      },
      "PRODUCTO": {
        "caption": 'sku',
        "size": "count",
        // "sizeCypher": "MATCH (n) WHERE id(n) = 'pp_Cxpu_' RETURN SIZE((n)--()) AS s",
        "community": "community",
        // "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/54091005/2129090857.jpg"
        // "image": "thumbnailUrl",
        "image": (function () {
          return "https://d2j6dbq0eux0bg.cloudfront.net/images/54091005/2856069359.jpg"
        })(),
        "icon": "a"
      },
      "_store": {
        "image": "assets/images/logos/now.png",
        "size": 0.1
      }
      // [NEOVIS_DEFAULT_CONFIG]: {
      //      "caption": "defaultCaptionProperty",
      //      "size": "defaultPagerank",
      //      "community": "defaultCommunity"
      //     //  "sizeCypher": "defaultSizeCypher"

      // }
    },
    relationships: {
      "VISUALIZO_EL_SIGUIENTE": {
        "thickness": "defaultThicknessProperty",
        "caption": false
      },
      "INGRESO_A": {
        // thickness : "weight",
        thickness: 1,
        caption: false
      },
      // [NEOVIS_DEFAULT_CONFIG]: {
      //   "thickness": "defaultThicknessProperty",
      //   "caption": "defaultCaption"
      // }
    },
    initial_cypher: `MATCH (vi:Visitante)-[in:INGRESO_A]->(store:_store)-[visu:VISUALIZO_EL_SIGUIENTE]->(p:PRODUCTO) WHERE vi._id = 'pp_Cxpu_' RETURN vi, in, store,visu,p, vi._id`,
    arrows: true,
  }
  panelActive: boolean = false;
  viz: any;
  selectedVisitante: any = {};
  visitantes: any = {
    "data": [
      {
        "_id": "0qCngARW",
        "ip": "159.147.141.181"
      },
      {
        "_id": "TJtE0fvw",
        "ip": "320.147.141.200"
      },
      {
        "_id": "v6Y5HawG",
        "ip": "195.147.141.056"
      }
    ]
  }
  nodes: any;
  producTables: any = [];
  edges: any;
  data: any;
  options: any;
  @ViewChild('app', { static: false }) app!: ElementRef;
  // @ViewChild('visNetwork', { static: false }) visNetwork!: ElementRef;
  private networkInstance!: Network;

  constructor(private _metricsService: MetricsService) { }

  ngOnInit(): void { }

  cargado(){
    console.log("CArgadooooooo....")
  }

  onRowSelect(event: any) {
    console.log(":::CODIGO:VISITANTE", this.selectedVisitante._id)
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
          // console.log(this.nodes.get())
          // console.log(graph.data!.nodes)
          // console.log(this.producTables)

          if (this.panelActive) {
            this.activaGrafo();
          }
          console.table(":::GRAPH::PRODUCT:VISITED:FOR:USER", this.nodes.get())
          // console.table(":::GRAPH::PRODUCT:VISITED:FOR:USER", this.edgesA)
        }
      })

      // this.producTables = this.producTables.map()

  }

  onRowUnselect(event: any) {
    return;
  }

  activaGrafo(e?: any) {

    if (e?.index === 1 || true) {
      this.panelActive = true;

      this.data = { nodes: this.nodes, edges: this.edges };
      this.options = {
        height: '100%',
        width: '100%',
        // configure: {
        //   filter: (option:any, path:any)=>{ console.log( ':::FILTER:',option,path ) }
        // },
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
          navigationButtons: false, // Si es verdadero, dibuje los botones de navegación en el lienzo web. Estos son botones HTML y se pueden personalizar completamente mediante CSS.
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

      this.networkInstance = new Network(this.app.nativeElement, this.data, this.options);

      this.networkInstance.fit();
      this.options.nodes.mass = 1;
      this.networkInstance.setOptions(this.options);


      this.networkInstance.on('click', (e) => {
        // nodes.getDataSet().add([{ id: 8, label: "Tia", color:'orangered' }]);
        // edges.add( {from:6,to:8},'a' )


        // console.log(e.nodes[0],nodes.getDataSet().get())
        // let valor = nodes[0].array.forEach((element:any) => {
        //   id = nodo
        // });

      })
    }
  }


}
