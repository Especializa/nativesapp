"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message() {
        this.text = '';
        this.created = Date.now();
    }
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUFBO1FBRVMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdULFlBQU8sR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFPL0MsQ0FBQztJQUpRLDBCQUFRLEdBQWY7UUFDUSxJQUFBLFNBQXdCLEVBQXRCLG9CQUFPLEVBQUUsY0FBSSxDQUFVO1FBQy9CLE1BQU0sQ0FBQyx5QkFBdUIsT0FBTyxpQkFBWSxJQUFNLENBQUM7SUFDMUQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4vY2hhdC5tb2RlbCc7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi9jb250YWN0Lm1vZGVsJztcbmltcG9ydCB7IFNlbnRTdGF0dXMgfSBmcm9tICcuL3NlbnQtc3RhdHVzLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBwdWJsaWMgaWQ/OiBudW1iZXI7XG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGNoYXQ6IENoYXQ7XG4gIHB1YmxpYyBzZW5kZXI6IENvbnRhY3Q7XG4gIHB1YmxpYyByZWFkb25seSBjcmVhdGVkOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuICBwdWJsaWMgc2VudDogU2VudFN0YXR1cztcblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCB7IGNyZWF0ZWQsIHRleHQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGBNZXNzYWdlIGNyZWF0ZWQgYXQ6ICR7Y3JlYXRlZH0gLSBUZXh0OiAke3RleHR9YDtcbiAgfVxufVxuIl19