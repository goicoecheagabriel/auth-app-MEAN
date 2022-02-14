import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './dashboard/pages/chat/chat.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { SuscriptorsComponent } from './dashboard/pages/suscriptors/suscriptors.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'suscriptors', component: SuscriptorsComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
