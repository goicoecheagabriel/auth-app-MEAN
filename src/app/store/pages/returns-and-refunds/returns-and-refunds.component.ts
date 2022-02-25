import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';

import tree from '../../../../assets/data/returns-and-refunds/tree.en.json';

@Component({
  selector: 'app-returns-and-refunds',
  templateUrl: './returns-and-refunds.component.html',
  styleUrls: ['./returns-and-refunds.component.css']
})
export class ReturnsAndRefundsComponent implements OnInit {

  nodes: TreeNode[] | any = tree;
  node!: TreeNode;
  txt: string = this.nodes[0]?.children[0]?.txt?.es;
  @ViewChild('panel') panel!: ElementRef;
  ruta = [
    {
      titulo: '',
      ruta: '/'
    },
    {
      titulo: '',
      ruta: '/returns-and-refunds'
    }
   ]

  constructor( private _scrollTopService: ScrollTopService,
               private _translate:TranslateService ) {
    // this.pregunta(this.nodes[0]);
  }

  ngOnInit(): void {
    let lng = this._translate.getBrowserLang();
    let exist = this.UrlExists(`../../../../assets/data/returns-and-refunds/tree.${ lng }.json`);
    import(`../../../../assets/data/returns-and-refunds/tree.${exist?lng:'en'}.json`).then( ({default:t}) => {
      this.nodes = t;
    });

    this._translate.get( ['store_returns_and_refunds_002', 'store_returns_and_refunds_003'] )
      .subscribe( translations => {
        this.ruta[0].titulo = translations['store_returns_and_refunds_002'];
        this.ruta[1].titulo = translations['store_returns_and_refunds_003'];
      } )

  }

  UrlExists(url:string) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
  }

  pregunta(node:any){
    this.txt = node.txt.es;
    this.node = node;

    // Se realiza un timeout para asegurarse que el @ViewChild se encuentra disponible.
    setTimeout(() => {
      // Hacemos que el scroll se fije en el panel donde cargamos la info
      this._scrollTopService.scrollTop(this.panel.nativeElement, 30);
    });

  }

}
