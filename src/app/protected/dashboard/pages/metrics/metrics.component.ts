import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import NeoVis, {NEOVIS_DEFAULT_CONFIG} from 'neovis.js';
import { environment } from 'src/environments/environment';

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
          "image": (function(){
            return "https://d2j6dbq0eux0bg.cloudfront.net/images/54091005/2856069359.jpg"
          })(),
          "icon":"a"
        },
        "_store": {
          "image":"assets/images/logos/now.png",
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
        thickness : 1,
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
  panelActive:boolean = false;
  viz: any;
  selectedVisitante: any = {};
  visitantes: any = {
    "data": [
    {
      "_id": "0qCngARW",
      "ip": "159.147.141.181"
    },
    {
      "_id": "pp_Cxpu_",
      "ip": "320.147.141.181"
    },
    {
      "_id": "TJtE0fvw",
      "ip": "320.147.141.200"
    }
  ]
}
  @ViewChild('app') app!:ElementRef;

  constructor() { }

  ngOnInit(): void { }

  onRowSelect(event:any){

    this.config.initial_cypher= `MATCH (vi:Visitante)-[in:INGRESO_A]->(store:_store)-[visu:VISUALIZO_EL_SIGUIENTE]->(p:PRODUCTO) WHERE vi._id = '${ event.data._id }' RETURN vi, in, store,visu,p, vi._id order by p.count asc`
    // this.config.initial_cypher= `MATCH (n)-[s]-(t)-[a]-(l) where n._id = '${ event.data._id }' RETURN n,s,t,a,l`

    if( this.panelActive ){
      this.viz = new NeoVis( this.config )
      .render();

    }
  }

  onRowUnselect( event: any ){
    return;
  }

  activaGrafo(e: any){

    if ( e.index === 1 ) {
      this.panelActive = true;
      this.viz = new NeoVis( this.config ).render();
      console.log(new NeoVis( this.config ).nodes)
    }
  }

}
