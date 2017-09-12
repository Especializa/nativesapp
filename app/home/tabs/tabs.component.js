"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCxtQ0FBcUM7QUFRckM7SUFFRTtJQUFlLENBQUM7SUFFaEIsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFOVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0FPekI7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSAncGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdGFicycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gcGxhdGZvcm0uaXNBbmRyb2lkID8gMSA6IDM7XG4gIH1cbn1cbiJdfQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQVExRDtJQUVFLHVCQUM2QixRQUFRO1FBQVIsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUNsQyxDQUFDO0lBRUosZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBUlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQztRQUlHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBOztPQUhWLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtdGFicycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5wbGF0Zm9ybS5pc0FuZHJvaWQgPyAxIDogMztcbiAgfVxufVxuIl19
>>>>>>> NavigationHistory
