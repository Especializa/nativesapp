"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var shared_module_1 = require("../shared/shared.module");
var chat_routing_module_1 = require("./chat-routing.module");
var chat_component_1 = require("./chat.component");
var message_box_component_1 = require("./message-box/message-box.component");
var messages_area_component_1 = require("./messages-area/messages-area.component");
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
                mdi: 'material-design-icons.css',
            }),
        ],
        declarations: [
            chat_component_1.ChatComponent,
            messages_area_component_1.MessagesAreaComponent,
            message_box_component_1.MessageBoxComponent,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], ChatModule);
exports.ChatModule = ChatModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxvREFBcUU7QUFDckUsZ0ZBQThFO0FBQzlFLHVFQUE4RDtBQUU5RCx5REFBdUQ7QUFDdkQsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUNqRCw2RUFBMEU7QUFDMUUsbUZBQWdGO0FBcUJoRixJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFuQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixHQUFHLEVBQUUsMkJBQTJCO2FBQ2pDLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLDhCQUFhO1lBQ2IsK0NBQXFCO1lBQ3JCLDJDQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2NoYXQtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gJy4vY2hhdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVzc2FnZUJveENvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZS1ib3gvbWVzc2FnZS1ib3guY29tcG9uZW50JztcbmltcG9ydCB7IE1lc3NhZ2VzQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vbWVzc2FnZXMtYXJlYS9tZXNzYWdlcy1hcmVhLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgQ2hhdFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbWRpOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcycsXG4gICAgfSksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENoYXRDb21wb25lbnQsXG4gICAgTWVzc2FnZXNBcmVhQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VCb3hDb21wb25lbnQsXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0TW9kdWxlIHsgfVxuIl19