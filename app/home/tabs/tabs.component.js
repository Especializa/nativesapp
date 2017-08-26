"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsComponent = (function () {
    function TabsComponent(platform) {
        this.platform = platform;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-tabs',
        templateUrl: './tabs.component.html',
        styleUrls: ['./tabs.component.css']
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQVExRCxJQUFhLGFBQWE7SUFFeEIsdUJBQzZCLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQ2xDLENBQUM7SUFFSixnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztJQUlHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztHQUhWLGFBQWEsQ0FTekI7QUFUWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXRhYnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm1cbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkID8gMSA6IDM7XG4gIH1cbn1cbiJdfQ==