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
      titulo:this._translate.instant('store_about_us_002'),ruta:'/'
    },
    {
      titulo:this._translate.instant('store_about_us_003'),
      ruta:'/about-us'
    }
   ]

  constructor( private _translate: TranslateService ) { }

  ngOnInit(): void {
  }

}
