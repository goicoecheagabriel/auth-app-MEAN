import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ScrollTopService } from 'src/app/shared/scroll-top.service';

import tree from '../../../../assets/data/returns-and-refunds/tree.json';

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

  constructor( private _scrollTopService: ScrollTopService ) {
    // this.pregunta(this.nodes[0]);
  }

  ngOnInit(): void {
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
