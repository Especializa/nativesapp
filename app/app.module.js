"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var platform = require("platform");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var core_2 = require("./core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
element_registry_1.registerElement('Fab', function () { return nativescript_floatingactionbutton_1.Fab; });
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent,
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_module_1.AppRoutingModule,
            core_2.CoreModule,
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        providers: [
            { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader },
            { provide: 'platform', useValue: platform },
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FDaUQ7QUFDakQsZ0ZBQThFO0FBQzlFLHNEQUFvRTtBQUNwRSxtQ0FBcUM7QUFFckMsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQywrQkFBb0M7QUFFcEMsMEVBQXdFO0FBQ3hFLHVGQUF3RDtBQUV4RCxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsdUNBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztBQXNCbEMsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBcEJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLHFDQUFnQjtZQUNoQixpQkFBVTtTQUNYO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULEVBQUUsT0FBTyxFQUFFLDRCQUFxQixFQUFFLFFBQVEsRUFBRSw4QkFBcUIsRUFBRTtZQUNuRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtTQUM1QztRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXG4gICAgICAgICBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tICdwbGF0Zm9ybSc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vY29yZSc7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgRmFiIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uJztcblxucmVnaXN0ZXJFbGVtZW50KCdGYWInLCAoKSA9PiBGYWIpO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgQ29yZU1vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9LFxuICAgICAgeyBwcm92aWRlOiAncGxhdGZvcm0nLCB1c2VWYWx1ZTogcGxhdGZvcm0gfSxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gICAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19