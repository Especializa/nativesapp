"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chats_service_1 = require("./chats.service");
var ChatsComponent = (function () {
    function ChatsComponent(chatsService) {
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.ngOnInit = function () {
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
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGlEQUErQztBQVEvQyxJQUFhLGNBQWM7SUFFekIsd0JBQVksWUFBMEI7UUFEL0IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3JDLENBQUM7cUNBRzBCLDRCQUFZO0dBRjNCLGNBQWMsQ0FRMUI7QUFSWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoYXRzU2VydmljZSB9IGZyb20gJy4vY2hhdHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLWNoYXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdHMuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjaGF0cyA9IFtdO1xuICBjb25zdHJ1Y3RvcihjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSkge1xuICAgIHRoaXMuY2hhdHMgPSBjaGF0c1NlcnZpY2UuY2hhdHM7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxufVxuIl19