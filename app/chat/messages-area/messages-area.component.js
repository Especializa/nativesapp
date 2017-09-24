"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = (function () {
    function MessagesAreaComponent() {
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    return MessagesAreaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MessagesAreaComponent.prototype, "messages", void 0);
MessagesAreaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-messages-area',
        templateUrl: './messages-area.component.html',
        styleUrls: ['./messages-area.component.css'],
    })
], MessagesAreaComponent);
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixtQ0FBaUQ7QUFRakQsSUFBYSxxQkFBcUI7SUFBbEM7SUE0QkEsQ0FBQztJQXpCQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDhDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLE9BQWdCO1FBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssaUJBQVUsQ0FBQyxRQUFRO2dCQUN0QixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDM0IsS0FBSyxpQkFBVSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxpQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBM0JVO0lBQVIsWUFBSyxFQUFFOzt1REFBcUI7QUFEbEIscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQzdDLENBQUM7R0FDVyxxQkFBcUIsQ0E0QmpDO0FBNUJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlLCBTZW50U3RhdHVzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLW1lc3NhZ2VzLWFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZXMtYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0FyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtZXNzYWdlczogTWVzc2FnZVtdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzLnNsaWNlKDAsIDUwKTtcbiAgfVxuXG4gIGlzQ29udGludWF0aW9uKGlkeDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICghdGhpcy5tZXNzYWdlc1tpZHhdLnNlbmRlciAmJiB0aGlzLm1lc3NhZ2VzW2lkeCAtIDFdICYmXG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlc1tpZHggLSAxXS5zZW5kZXIpIHx8XG4gICAgICAgICAgICh0aGlzLm1lc3NhZ2VzW2lkeF0uc2VuZGVyICYmIHRoaXMubWVzc2FnZXNbaWR4IC0gMV0gJiZcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbaWR4IC0gMV0uc2VuZGVyKTtcbiAgfVxuXG4gIGdldEljb24obWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHN3aXRjaCAobWVzc2FnZS5zZW50KSB7XG4gICAgICBjYXNlIFNlbnRTdGF0dXMuTk9UX1NFTlQ6XG4gICAgICAgIHJldHVybiAnbWRpLWFjY2Vzcy10aW1lJztcbiAgICAgIGNhc2UgU2VudFN0YXR1cy5TRU5UOlxuICAgICAgICByZXR1cm4gJ21kaS1kb25lJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnbWRpLWRvbmUtYWxsJztcbiAgICB9XG4gIH1cblxuICBpc1ZpZXdlZChtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2Uuc2VudCA9PT0gU2VudFN0YXR1cy5WSUVXRUQ7XG4gIH1cbn1cbiJdfQ==