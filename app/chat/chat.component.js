"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var core_2 = require("../core");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(route, chatsService, router, platform, page) {
        this.route = route;
        this.chatsService = chatsService;
        this.router = router;
        this.platform = platform;
        this.page = page;
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
    };
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
            router_2.RouterExtensions, Object, page_1.Page])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQUMxRCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELGdDQUErQjtBQUUvQixnQ0FBNkM7QUFRN0M7SUFLRSx1QkFDVSxLQUFxQixFQUNyQixZQUEwQixFQUMxQixNQUF3QixFQUNMLFFBQVEsRUFDM0IsSUFBVTtRQUpWLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBQTtRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFNO0lBRXBCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBdEJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7UUFVRyxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTt5Q0FISix1QkFBYztZQUNQLG1CQUFZO1lBQ2xCLHlCQUFnQixVQUVsQixXQUFJO09BVlQsYUFBYSxDQXVCekI7SUFBRCxvQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmltcG9ydCB7IENoYXRzU2VydmljZSwgQ2hhdCB9IGZyb20gJy4uL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICducy1jaGF0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGF0SW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGNoYXQ6IENoYXQ7XG4gIHB1YmxpYyB1bnJlYWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgIHRoaXMuY2hhdEluZGV4ID0gK3BhcmFtc1snaW5kZXgnXTtcbiAgICAgIHRoaXMuY2hhdCA9IHRoaXMuY2hhdHNTZXJ2aWNlLmNoYXRzW3RoaXMuY2hhdEluZGV4XTtcbiAgICB9KTtcbiAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgdGhpcy51bnJlYWQgPSArcGFyYW1zWyd1bnJlYWQnXTtcbiAgICB9KTtcbiAgfVxufVxuIl19
