"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var core_2 = require("../../core");
var ChatsComponent = (function () {
    function ChatsComponent(chatsService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.goToChat = function (args) {
        var extras = {
            queryParams: {
                unread: 2,
            },
        };
        this.routerExtensions.navigate([
            'chat',
            args.index,
        ], extras);
    };
    return ChatsComponent;
}());
ChatsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-chats',
        templateUrl: './chats.component.html',
        styleUrls: ['./chats.component.css'],
    }),
    __metadata("design:paramtypes", [core_2.ChatsService,
        router_1.RouterExtensions])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUUvRCxtQ0FBMEM7QUFRMUMsSUFBYSxjQUFjO0lBRXpCLHdCQUNFLFlBQTBCLEVBQ2xCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSDVDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFLVCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBTSxNQUFNLEdBQXFCO1lBQy9CLFdBQVcsRUFBRTtnQkFDWCxNQUFNLEVBQUUsQ0FBQzthQUNWO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7WUFDN0IsTUFBTTtZQUNOLElBQUksQ0FBQyxLQUFLO1NBQ1gsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7S0FDckMsQ0FBQztxQ0FJZ0IsbUJBQVk7UUFDQSx5QkFBZ0I7R0FKakMsY0FBYyxDQW9CMUI7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hhdHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLWNoYXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdHMuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbXBvbmVudCB7XG4gIGNoYXRzID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgKSB7XG4gICAgdGhpcy5jaGF0cyA9IGNoYXRzU2VydmljZS5jaGF0cztcbiAgfVxuXG4gIGdvVG9DaGF0KGFyZ3MpIHtcbiAgICBjb25zdCBleHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICB1bnJlYWQ6IDIsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcbiAgICAgICdjaGF0JyxcbiAgICAgIGFyZ3MuaW5kZXgsXG4gICAgXSwgZXh0cmFzKTtcbiAgfVxufVxuIl19