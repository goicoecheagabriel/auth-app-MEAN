import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentIndexComponent } from './components/content-index/content-index.component';
import { EcwidComponent } from './pages/ecwid/ecwid.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent, children: [
       { path: '', component: ContentIndexComponent },
       { path: 'store', component: EcwidComponent },
       { path: '**', redirectTo: '' }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
