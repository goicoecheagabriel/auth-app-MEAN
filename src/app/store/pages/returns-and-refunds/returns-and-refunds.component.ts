import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

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

  constructor() {
    // this.pregunta(this.nodes[0]);
  }

  ngOnInit(): void {
  }

  pregunta(node:any){
    this.txt = node.txt.es;
    this.node = node;
  }

}
