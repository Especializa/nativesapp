"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var TabsComponent = (function () {
    function TabsComponent(platform, changeDetectorRef) {
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
        if (this.platform.isAndroid) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
                if (_this.selectedIndex !== 1) {
                    _this.selectedIndex = 1;
                    args.cancel = true;
                    _this.changeDetectorRef.detectChanges();
                }
            });
        }
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
    __metadata("design:paramtypes", [Object, core_1.ChangeDetectorRef])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSx5Q0FBMkM7QUFRM0MsSUFBYSxhQUFhO0lBRXhCLHVCQUM2QixRQUFRLEVBQzNCLGlCQUFvQztRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDM0MsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ3BCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFDdkQsVUFBQyxJQUFTO2dCQUNSLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pDLENBQUM7WUFDSCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3RDLENBQUM7SUFJRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTs2Q0FDUSx3QkFBaUI7R0FKbkMsYUFBYSxDQXVCekI7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdGFicycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkID8gMSA6IDM7XG5cbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0FuZHJvaWQpIHtcbiAgICAgIGFwcGxpY2F0aW9uLmFuZHJvaWQub24oXG4gICAgICAgIGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsXG4gICAgICAgIChhcmdzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19