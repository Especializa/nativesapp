"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var chat_component_1 = require("./chat.component");
var routes = [
    { path: '', component: chat_component_1.ChatComponent }
];
var ChatRoutingModule = (function () {
    function ChatRoutingModule() {
    }
    return ChatRoutingModule;
}());
ChatRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forChild(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], ChatRoutingModule);
exports.ChatRoutingModule = ChatRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYXQtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLG1EQUFpRDtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FDdkMsQ0FBQztBQU1GLElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFBbEMsSUFBa0M7QUFBckIsaUJBQWlCO0lBSjdCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztLQUNwQyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGF0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IENoYXRDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=