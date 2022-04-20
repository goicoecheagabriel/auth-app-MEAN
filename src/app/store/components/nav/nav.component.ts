import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  menu!: Menu;


  constructor( private _translate: TranslateService ) {
    let lng = this._translate.getBrowserLang();
    let exist = this.UrlExists(`../../../../assets/data/nav/menu.${ lng }.utility.json`);

    import(`../../../../assets/data/nav/menu.${exist?lng:'en'}.utility.json`).then( m => { return this.menu = m
    } );
  }

  UrlExists(url:string) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
  }



  ngOnInit(): void {
    // console.warn(":::ngOnInit:::nav.component")
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.warn(":::ngOnChanges:::nav.component")
  }

}
