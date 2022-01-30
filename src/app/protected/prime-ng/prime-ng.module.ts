import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule }         from 'primeng/button';
import { CardModule }           from 'primeng/card';
import { SplitterModule }       from 'primeng/splitter';
import { ScrollPanelModule }    from 'primeng/scrollpanel';
import { SidebarModule }        from 'primeng/sidebar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    SplitterModule,
    ScrollPanelModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
