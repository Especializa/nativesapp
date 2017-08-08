import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  imports: [
    NativeScriptModule,
    HomeRoutingModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })

  ],
  declarations: [
    HomeComponent,
    ChatsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
