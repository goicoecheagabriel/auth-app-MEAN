import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule }         from 'primeng/button';
import { CardModule }           from 'primeng/card';
import { SplitterModule }       from 'primeng/splitter';
import { ScrollPanelModule }    from 'primeng/scrollpanel';
import { SidebarModule }        from 'primeng/sidebar';
import { TableModule }          from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    SplitterModule,
    ScrollPanelModule,
    SidebarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
