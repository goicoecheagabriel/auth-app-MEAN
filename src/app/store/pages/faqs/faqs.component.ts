import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { PropsGeneralService } from 'src/app/shared/props-general.service';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';
import tree from '../../../../assets/data/faqs/tree.json';
;



@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
nodes: TreeNode[]|any = tree;
node!: TreeNode;
txt: string = this.nodes[0]?.children[0]?.txt?.es;
@ViewChild('mensaje') mensaje!: ElementRef;

  constructor( private _propsGeneralService: PropsGeneralService,
               private _scrollTopService:ScrollTopService ) {
    console.log(":::NODE",this.node);
    console.log(this.mensaje);
   }

   ngAfterViewInit(): void {
    // setInterval(()=>{
    //   this.mostrarTxt();
    // },5000)
    console.log(this.mensaje.nativeElement);

  }

  ngOnChanges (): void {

  }

  mostrarTxt(){
    // console.log(this.rutaActiva.snapshot.params)
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
