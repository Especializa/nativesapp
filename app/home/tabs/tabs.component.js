"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
<<<<<<< HEAD
<<<<<<< HEAD
var platform = require("platform");
var TabsComponent = (function () {
    function TabsComponent() {
=======
var TabsComponent = /** @class */ (function () {
    function TabsComponent(platform) {
        this.platform = platform;
>>>>>>> NavigationHistory
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.selectedIndex = platform.isAndroid ? 1 : 3;
    };
    TabsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css']
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [])
=======
        __param(0, core_1.Inject('platform')),
        __metadata("design:paramtypes", [Object])
>>>>>>> NavigationHistory
    ], TabsComponent);
=======
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
>>>>>>> TextView
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
<<<<<<< HEAD
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxtQ0FBcUM7QUFRckM7SUFFRTtJQUFlLENBQUM7SUFFaEIsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFOVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0FPekI7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdGFicycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcGxhdGZvcm0uaXNBbmRyb2lkID8gMSA6IDM7XG4gIH1cbn1cbiJdfQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQVExRDtJQUVFLHVCQUM2QixRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUNsQyxDQUFDO0lBRUosZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBUlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQztRQUlHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztPQUhWLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdGFicycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5wbGF0Zm9ybS5pc0FuZHJvaWQgPyAxIDogMztcbiAgfVxufVxuIl19
>>>>>>> NavigationHistory
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUU3RSx5Q0FBMkM7QUFRM0MsSUFBYSxhQUFhO0lBRXhCLHVCQUM2QixRQUFRLEVBQzNCLGlCQUFvQztRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDM0MsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQ3BCLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0IsRUFDdkQsVUFBQyxJQUF5QztnQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztZQUNILENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDdEMsQ0FBQztJQUlHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzZDQUNRLHdCQUFpQjtHQUpuQyxhQUFhLENBdUJ6QjtBQXZCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gJ2FwcGxpY2F0aW9uJztcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ25zLXRhYnMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIHNlbGVjdGVkSW5kZXg6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLnBsYXRmb3JtLmlzQW5kcm9pZCA/IDEgOiAzO1xuXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkKSB7XG4gICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKFxuICAgICAgICBhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LFxuICAgICAgICAoYXJnczogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4ICE9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAxO1xuICAgICAgICAgICAgYXJncy5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
>>>>>>> TextView
