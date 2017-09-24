"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var chat_routing_module_1 = require("./chat-routing.module");
var shared_module_1 = require("../shared/shared.module");
var chat_component_1 = require("./chat.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
var message_box_component_1 = require("./message-box/message-box.component");
var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            chat_routing_module_1.ChatRoutingModule,
            shared_module_1.SharedModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'mdi': 'material-design-icons.css'
            }),
        ],
        declarations: [
            chat_component_1.ChatComponent,
            messages_area_component_1.MessagesAreaComponent,
            message_box_component_1.MessageBoxComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHVFQUE4RDtBQUU5RCw2REFBMEQ7QUFDMUQseURBQXVEO0FBQ3ZELG1EQUFpRDtBQUNqRCxtRkFBZ0Y7QUFDaEYsNkVBQTBFO0FBcUIxRSxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFuQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsMkJBQTJCO2FBQ25DLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLDhCQUFhO1lBQ2IsK0NBQXFCO1lBQ3JCLDJDQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgQ2hhdFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NoYXQtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZXNBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlcy1hcmVhL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VCb3hDb21wb25lbnQgfSBmcm9tICcuL21lc3NhZ2UtYm94L21lc3NhZ2UtYm94LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQ2hhdFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJ1xuICAgIH0pLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDaGF0Q29tcG9uZW50LFxuICAgIE1lc3NhZ2VzQXJlYUNvbXBvbmVudCxcbiAgICBNZXNzYWdlQm94Q29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRNb2R1bGUgeyB9XG4iXX0=