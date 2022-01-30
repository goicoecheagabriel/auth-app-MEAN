import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// declare var window: any;
// declare var Ecwid: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authApp';

  constructor( private router:Router ){
  }


  ngOnInit(): void {

    this.router.events.subscribe( (evt)=> {
      if ( !(evt instanceof NavigationEnd) ){
        return;
      }

      window.scrollTo(0,0);
    } )
  }

    // ngOnChanges(changes: SimpleChanges): void {

    //   if (typeof Ecwid != 'undefined') Ecwid.destroy();
    // window._xnext_initialization_scripts = [{
    //       widgetType: 'ProductBrowser',
    //       id: 'my-store-54091005',
    //       arg: ["id=productBrowser"]
    //     }];
    // }


  }
