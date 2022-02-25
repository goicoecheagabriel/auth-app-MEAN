import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  ruta = [
    {
      titulo:'',
      ruta:'/'
    },
    {
      titulo:'',
      ruta:'/about-us'
    }
   ]

  constructor( private _translate: TranslateService ) { }

  ngOnInit(): void {

    this._translate.get( ['store_about_us_002', 'store_about_us_003'] )
      .subscribe( translations => {
        this.ruta[0].titulo = translations['store_about_us_002'];
        this.ruta[1].titulo = translations['store_about_us_003'];
      } )
  }

}
