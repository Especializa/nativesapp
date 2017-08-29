"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ChatComponent = (function () {
    function ChatComponent(route) {
        this.route = route;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chatIndex = +params['index'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.name = params['name'];
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFRakQsSUFBYSxhQUFhO0lBSXhCLHVCQUNVLEtBQXFCO1FBQXJCLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBRS9CLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO3FDQU1pQix1QkFBYztHQUxwQixhQUFhLENBaUJ6QjtBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLWNoYXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNoYXRJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmNoYXRJbmRleCA9ICtwYXJhbXNbJ2luZGV4J107XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMubmFtZSA9IHBhcmFtc1snbmFtZSddO1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==