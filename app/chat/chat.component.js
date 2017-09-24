"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var core_2 = require("../core");
var ChatComponent = (function () {
    function ChatComponent(route, chatsService, router, platform) {
        this.route = route;
        this.chatsService = chatsService;
        this.router = router;
        this.platform = platform;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chatIndex = +params.index;
            _this.chat = _this.chatsService.chats[_this.chatIndex];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.unread = +params.unread;
        });
        this.getMessages();
    };
    ChatComponent.prototype.getMessages = function () {
        this.messages = this.chatsService.getMessages(this.chat);
    };
    ChatComponent.prototype.goBack = function () {
        this.router.back();
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
    __param(3, core_1.Inject('platform')),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        core_2.ChatsService,
        router_2.RouterExtensions, Object])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUE2QztBQVM3QyxJQUFhLGFBQWE7SUFNeEIsdUJBQ1UsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsTUFBd0IsRUFDTCxRQUFRO1FBSDNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUVyQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDdEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO0lBV0csV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7cUNBSEosdUJBQWM7UUFDUCxtQkFBWTtRQUNsQix5QkFBZ0I7R0FUdkIsYUFBYSxDQWdDekI7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhdCwgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gJy4uL2NvcmUvbW9kZWxzL21lc3NhZ2UubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1jaGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNoYXRJbmRleDogbnVtYmVyO1xuICBjaGF0OiBDaGF0O1xuICB1bnJlYWQ6IG51bWJlcjtcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLmNoYXRJbmRleCA9ICtwYXJhbXMuaW5kZXg7XG4gICAgICB0aGlzLmNoYXQgPSB0aGlzLmNoYXRzU2VydmljZS5jaGF0c1t0aGlzLmNoYXRJbmRleF07XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy51bnJlYWQgPSArcGFyYW1zLnVucmVhZDtcbiAgICB9KTtcbiAgICB0aGlzLmdldE1lc3NhZ2VzKCk7XG4gIH1cblxuICBnZXRNZXNzYWdlcygpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5jaGF0c1NlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy5jaGF0KTtcbiAgfVxuXG4gIGdvQmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5iYWNrKCk7XG4gIH1cbn1cbiJdfQ==