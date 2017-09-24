import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat.component';
import { MessagesAreaComponent } from './messages-area/messages-area.component';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ChatRoutingModule,
    SharedModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    }),
  ],
  declarations: [
    ChatComponent,
    MessagesAreaComponent,
    MessageBoxComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class ChatModule { }
