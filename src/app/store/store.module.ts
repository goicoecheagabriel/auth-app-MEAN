import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EcwidComponent } from './pages/ecwid/ecwid.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageSupComponent } from './components/message-sup/message-sup.component';
import { SearchSupComponent } from './components/search-sup/search-sup.component';
import { ContentIndexComponent } from './components/content-index/content-index.component';


@NgModule({
  declarations: [
    HomeComponent,
    EcwidComponent,
    NavComponent,
    HeaderComponent,
    MessageSupComponent,
    SearchSupComponent,
    ContentIndexComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
