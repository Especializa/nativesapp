"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var chats_component_1 = require("./chats/chats.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            home_routing_module_1.HomeRoutingModule,
            nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                'mdi': 'fonts/material-design-icons.css'
            })
        ],
        declarations: [
            home_component_1.HomeComponent,
            chats_component_1.ChatsComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsdUVBQThEO0FBRTlELDZEQUEwRDtBQUMxRCxtREFBaUQ7QUFDakQsMkRBQXlEO0FBbUJ6RCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFqQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQix1Q0FBaUI7WUFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsaUNBQWlDO2FBQ3pDLENBQUM7U0FFSDtRQUNELFlBQVksRUFBRTtZQUNaLDhCQUFhO1lBQ2IsZ0NBQWM7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ob21lLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0cy9jaGF0cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgJ21kaSc6ICdmb250cy9tYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJ1xuICAgIH0pXG5cbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBDaGF0c0NvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=