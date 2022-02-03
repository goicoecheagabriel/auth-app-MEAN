import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentIndexComponent } from './components/content-index/content-index.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EcwidComponent } from './pages/ecwid/ecwid.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { ReturnsAndRefundsComponent } from './pages/returns-and-refunds/returns-and-refunds.component';

const routes: Routes = [
  {
     path: '', component: HomeComponent, children: [
       { path: '', component: ContentIndexComponent },
       { path: 'store/:id', component: EcwidComponent, pathMatch:'full' },
       { path: 'store', component: EcwidComponent, pathMatch:'full' },
       { path: 'faqs', component: FaqsComponent, pathMatch:'full' },
       { path: 'contact', component: ContactComponent, pathMatch:'full' },
       { path: 'about-us', component: AboutUsComponent, pathMatch:'full' },
       { path: 'returns-and-refunds', component: ReturnsAndRefundsComponent, pathMatch:'full' },
       { path: '**', redirectTo: '' }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
