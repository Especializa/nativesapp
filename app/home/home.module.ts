import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    HomeRoutingModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    }),
  ],
  declarations: [
    HomeComponent,
    TabsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
