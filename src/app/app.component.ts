import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

// declare var window: any;
// declare var Ecwid: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authApp';

  constructor(){
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // window.ecwid_script_defer = true;
    // window.ecwid_dynamic_widgets = true;

    // console.log("TYPEOFF ECWID", typeof Ecwid)
    // if (typeof Ecwid != 'undefined') Ecwid.destroy();
    // window._xnext_initialization_scripts = [{
    //       widgetType: 'ProductBrowser',
    //       id: 'my-store-54091005',
    //       arg: ["id=productBrowser"]
    //     }];
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
