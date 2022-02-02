import { NgModule }             from '@angular/core';

// PrimeNg
import { TreeModule }           from 'primeng/tree';
// import { GMapModule }           from 'primeng/gmap';
import { InputTextModule }      from 'primeng/inputtext';
import { InputTextareaModule }  from 'primeng/inputtextarea';
import { ButtonModule }         from 'primeng/button';
import { CaptchaModule } from 'primeng/captcha';

@NgModule({
  declarations: [],
  exports: [
    TreeModule,
    // GMapModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CaptchaModule
  ]
})
export class PrimeNgModule { }
