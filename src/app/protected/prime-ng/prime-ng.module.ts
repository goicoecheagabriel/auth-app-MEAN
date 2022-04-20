import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule }           from 'primeng/button';
import { CardModule }             from 'primeng/card';
import { SplitterModule }         from 'primeng/splitter';
import { ScrollPanelModule }      from 'primeng/scrollpanel';
import { SidebarModule }          from 'primeng/sidebar';
import { TableModule }            from 'primeng/table';
import { TabViewModule }          from 'primeng/tabview';
import { TagModule }              from 'primeng/tag';
import { MessagesModule }         from 'primeng/messages';
import { MessageModule }          from 'primeng/message';
import { ProgressSpinnerModule }  from 'primeng/progressspinner';
import { ProgressBarModule }      from 'primeng/progressbar';
import { AvatarModule }           from 'primeng/avatar';
import { AvatarGroupModule }      from 'primeng/avatargroup';
import { ContextMenuModule }      from 'primeng/contextmenu';

import { SplitButtonModule }      from 'primeng/splitbutton';


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
    MessageModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    AvatarModule,
    AvatarGroupModule,
    SplitButtonModule,
    ContextMenuModule
  ]
})
export class PrimeNgModule { }
