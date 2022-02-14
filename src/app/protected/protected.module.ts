import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// Módulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { ChatComponent } from './dashboard/pages/chat/chat.component';
import { SuscriptorsComponent } from './dashboard/pages/suscriptors/suscriptors.component';




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ChatComponent,
    SuscriptorsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PrimeNgModule
  ]
})
export class ProtectedModule { }
