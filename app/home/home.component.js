"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(platform) {
        this.platform = platform;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onTabChanged = function (event) {
        // const tabView = event.object;
        // console.log(JSON.stringify(tabView));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQVExRCxJQUFhLGFBQWE7SUFFeEIsdUJBQzZCLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQ2xDLENBQUM7SUFFSixnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2hCLGdDQUFnQztRQUNoQyx3Q0FBd0M7SUFDMUMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO0lBSUcsV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7O0dBSFYsYUFBYSxDQWF6QjtBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbnMtaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgb25UYWJDaGFuZ2VkKGV2ZW50KSB7XG4gICAgLy8gY29uc3QgdGFiVmlldyA9IGV2ZW50Lm9iamVjdDtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWJWaWV3KSk7XG4gIH1cbn1cbiJdfQ==