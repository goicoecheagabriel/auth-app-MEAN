import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import tree from '../../../../assets/data/faqs/tree.json';
;



@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
nodes: TreeNode[]|any = tree;
node!: TreeNode;
txt: string = this.nodes[0]?.children[0]?.txt?.es;

  constructor() {
    console.log(":::NODE",this.node);
   }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.mostrarTxt();
    // },5000)
  }

  ngOnChanges (): void {

  }

  mostrarTxt(){
    // console.log(this.rutaActiva.snapshot.params)
  }

  pregunta(node:any){
    // console.log(node);
    this.txt = node.txt.es;
    // console.log(node);
    this.node = node;
  }

}
