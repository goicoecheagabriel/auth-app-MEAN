import { Component, OnInit } from '@angular/core';

import { SuscriptorsService } from '../../services/suscriptors.service';
import { Suscriptor } from '../../interfaces/suscriptores.interface'
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-suscriptors',
  templateUrl: './suscriptors.component.html',
  styleUrls: ['./suscriptors.component.css']
})
export class SuscriptorsComponent implements OnInit {

  suscriptores!: Suscriptor[];
  cols: any = [
  { field:"_id", header:"Id" },
  { field:"email", header:"Email" },
  { field:"name", header:"Nombre" },
  { field:"aceptaPublicidad", header:"Publicidad" },
  { field:"validado", header:"Validado" }
]
selectedProducts: Suscriptor[] = [];
  constructor( private _suscriptorsService: SuscriptorsService ) { }

  ngOnInit(): void {

    this._suscriptorsService.getSuscriptors()
      .subscribe( suscriptores => this.suscriptores = suscriptores.data )

    setTimeout(() => {
      console.log(":::SUSCRIPTORES",this.suscriptores)
    }, 3000);

  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      console.log(this.selectedProducts)
        const worksheet = xlsx.utils.json_to_sheet(this.selectedProducts.length > 0 ? this.selectedProducts : this.suscriptores);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "suscriptores");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}


}
