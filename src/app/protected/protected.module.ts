import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// Módulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { ChatComponent } from './dashboard/pages/chat/chat.component';
import { SuscriptorsComponent } from './dashboard/pages/suscriptors/suscriptors.component';
import { MetricsComponent } from './dashboard/pages/metrics/metrics.component';
import { NotFoundMetricsComponent } from './dashboard/comoponents/not-found-metrics/not-found-metrics.component';
import { ProductosMetricsComponent } from './dashboard/comoponents/productos-metrics/productos-metrics.component';
import { PaginasMetricsComponent } from './dashboard/comoponents/paginas-metrics/paginas-metrics.component';
import { LogsMetricsComponent } from './dashboard/comoponents/logs-metrics/logs-metrics.component';




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ChatComponent,
    SuscriptorsComponent,
    MetricsComponent,
    NotFoundMetricsComponent,
    ProductosMetricsComponent,
    PaginasMetricsComponent,
    LogsMetricsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PrimeNgModule
  ]
})
export class ProtectedModule { }
