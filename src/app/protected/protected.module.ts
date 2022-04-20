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
import { NotFoundMetricsComponent } from './dashboard/components/not-found-metrics/not-found-metrics.component';
import { ProductosTableMetricsComponent } from './dashboard/components/productos-table-metrics/productos-table-metrics.component';
import { PaginasMetricsComponent } from './dashboard/components/paginas-metrics/paginas-metrics.component';
import { LogsMetricsComponent } from './dashboard/components/logs-metrics/logs-metrics.component';
import { ProductosGraphoMetricsComponent } from './dashboard/components/productos-grapho-metrics/productos-grapho-metrics.component';




@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ChatComponent,
    SuscriptorsComponent,
    MetricsComponent,
    NotFoundMetricsComponent,
    ProductosTableMetricsComponent,
    PaginasMetricsComponent,
    LogsMetricsComponent,
    ProductosGraphoMetricsComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PrimeNgModule
  ]
})
export class ProtectedModule { }
