"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var core_2 = require("../../core");
var ChatsComponent = /** @class */ (function () {
    function ChatsComponent(chatsService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    ChatsComponent.prototype.goToChat = function (args) {
        var extras = {
            queryParams: {
                unread: 2
            }
        };
        this.routerExtensions.navigate([
            'chat',
            args.index
        ], extras);
    };
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
    return ChatsComponent;
}());
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUUvRCxtQ0FBMEM7QUFRMUM7SUFFRSx3QkFDRSxZQUEwQixFQUNsQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUhyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBS2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNYLElBQU0sTUFBTSxHQUFxQjtZQUMvQixXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLENBQUM7YUFDVjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1lBQzdCLE1BQU07WUFDTixJQUFJLENBQUMsS0FBSztTQUNYLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDO0lBdEJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3JDLENBQUM7eUNBSWdCLG1CQUFZO1lBQ0EseUJBQWdCO09BSmpDLGNBQWMsQ0F1QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbnMtY2hhdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGF0cy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNoYXRzID0gW107XG4gIGNvbnN0cnVjdG9yKFxuICAgIGNoYXRzU2VydmljZTogQ2hhdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgKSB7XG4gICAgdGhpcy5jaGF0cyA9IGNoYXRzU2VydmljZS5jaGF0cztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ29Ub0NoYXQoYXJncykge1xuICAgIGNvbnN0IGV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHVucmVhZDogMlxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcbiAgICAgICdjaGF0JyxcbiAgICAgIGFyZ3MuaW5kZXhcbiAgICBdLCBleHRyYXMpO1xuICB9XG59XG4iXX0=
