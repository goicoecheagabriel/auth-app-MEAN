import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule }         from 'primeng/button';
import { CardModule }           from 'primeng/card';
import { SplitterModule }       from 'primeng/splitter';
import { ScrollPanelModule }    from 'primeng/scrollpanel';
import { SidebarModule }        from 'primeng/sidebar';
import { TableModule }          from 'primeng/table';
import { TabViewModule }        from 'primeng/tabview';
import { TagModule }            from 'primeng/tag';
import { MessagesModule }       from 'primeng/messages';
import { MessageModule }        from 'primeng/message';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    SplitterModule,
    ScrollPanelModule,
    SidebarModule,
    TableModule,
    TabViewModule,
    TagModule,
    MessagesModule,
    MessageModule
  ]
})
export class PrimeNgModule { }
