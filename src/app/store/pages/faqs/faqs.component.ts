import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TreeNode } from 'primeng/api';

import { PropsGeneralService } from 'src/app/shared/props-general.service';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';
import tree from '../../../../assets/data/faqs/tree.en.json';
;

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
nodes: TreeNode[] | any = tree;
node!: TreeNode;
txt: string = this.nodes[0]?.children[0]?.txt?.es;
@ViewChild('mensaje') mensaje!: ElementRef;
ruta = [
  {
    titulo: '',
    ruta: '/'
  },
  {
    titulo: '',
    ruta: '/faqs'
  }
 ]

  constructor( private _propsGeneralService: PropsGeneralService,
               private _scrollTopService:ScrollTopService,
               private _translate: TranslateService ) {

    console.log(":::NODE",this.node);
    console.log(this.mensaje);

  }

  ngOnInit(): void {
    let lng = this._translate.getBrowserLang();
    let exist = this.UrlExists(`../../../../assets/data/faqs/tree.${ lng }.json`);
    import(`../../../../assets/data/faqs/tree.${exist?lng:'en'}.json`).then( ({default:t}) => {
      this.nodes = t;
    });

    this._translate.get( ['store_faqs_002', 'store_faqs_003'] )
      .subscribe( translations => {
        this.ruta[0].titulo = translations['store_faqs_002'];
        this.ruta[1].titulo = translations['store_faqs_003'];
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
    this._scrollTopService.scrollTop( this.mensaje.nativeElement.querySelector('.texto-2'), 40, false )
    });

  }

}
