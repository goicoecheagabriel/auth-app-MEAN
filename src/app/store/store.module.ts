import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateMiModule } from '../shared/translate/translateMi.module';

import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EcwidComponent } from './pages/ecwid/ecwid.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageSupComponent } from './components/message-sup/message-sup.component';
import { SearchSupComponent } from './components/search-sup/search-sup.component';
import { ContentIndexComponent } from './components/content-index/content-index.component';
import { IntroduccionComponent } from './components/introduccion/introduccion.component';
import { ArticulosDestacadosComponent } from './components/articulos-destacados/articulos-destacados.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SuscribeComponent } from './components/suscribe/suscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavMovilComponent } from './components/nav-movil/nav-movil.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

// Modulos personalizados
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ContactComponent } from './pages/contact/contact.component';
import { TituloPageComponent } from './components/titulo-page/titulo-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ReturnsAndRefundsComponent } from './pages/returns-and-refunds/returns-and-refunds.component'


@NgModule({
  declarations: [
    HomeComponent,
    EcwidComponent,
    NavComponent,
    HeaderComponent,
    MessageSupComponent,
    SearchSupComponent,
    ContentIndexComponent,
    IntroduccionComponent,
    ArticulosDestacadosComponent,
    LoadingComponent,
    ProductoComponent,
    SuscribeComponent,
    FooterComponent,
    NavMovilComponent,
    FaqsComponent,
    ContactComponent,
    TituloPageComponent,
    AboutUsComponent,
    ReturnsAndRefundsComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    StoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimeNgModule,
    TranslateMiModule
  ]
})
export class StoreModule { }
