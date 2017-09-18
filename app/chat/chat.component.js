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
            _this.chatIndex = +params['index'];
            _this.chat = _this.chatsService.chats[_this.chatIndex];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.unread = +params['unread'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUE2QztBQVM3QyxJQUFhLGFBQWE7SUFNeEIsdUJBQ1UsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsTUFBd0IsRUFDTCxRQUFRO1FBSDNCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBQTtJQUVyQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztJQVdHLFdBQUEsYUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3FDQUhKLHVCQUFjO1FBQ1AsbUJBQVk7UUFDbEIseUJBQWdCO0dBVHZCLGFBQWEsQ0FnQ3pCO0FBaENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoYXRzU2VydmljZSwgQ2hhdCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tICcuLi9jb3JlL21vZGVscy9tZXNzYWdlLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtY2hhdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY2hhdEluZGV4OiBudW1iZXI7XG4gIHB1YmxpYyBjaGF0OiBDaGF0O1xuICBwdWJsaWMgdW5yZWFkOiBudW1iZXI7XG4gIHB1YmxpYyBtZXNzYWdlczogTWVzc2FnZVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgY2hhdHNTZXJ2aWNlOiBDaGF0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0sXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmNoYXRJbmRleCA9ICtwYXJhbXNbJ2luZGV4J107XG4gICAgICB0aGlzLmNoYXQgPSB0aGlzLmNoYXRzU2VydmljZS5jaGF0c1t0aGlzLmNoYXRJbmRleF07XG4gICAgfSk7XG4gICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMudW5yZWFkID0gK3BhcmFtc1sndW5yZWFkJ107XG4gICAgfSk7XG4gICAgdGhpcy5nZXRNZXNzYWdlcygpO1xuICB9XG5cbiAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMuY2hhdHNTZXJ2aWNlLmdldE1lc3NhZ2VzKHRoaXMuY2hhdCk7XG4gIH1cblxuICBnb0JhY2soKSB7XG4gICAgdGhpcy5yb3V0ZXIuYmFjaygpO1xuICB9XG59XG4iXX0=