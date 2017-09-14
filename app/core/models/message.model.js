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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO1FBRVMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdULFlBQU8sR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFNL0MsQ0FBQztJQUpRLDBCQUFRLEdBQWY7UUFDUSxJQUFBLFNBQXdCLEVBQXRCLG9CQUFPLEVBQUUsY0FBSSxDQUFVO1FBQy9CLE1BQU0sQ0FBQyx5QkFBdUIsT0FBTyxpQkFBWSxJQUFNLENBQUM7SUFDMUQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGF0fSBmcm9tICcuL2NoYXQubW9kZWwnO1xuaW1wb3J0IHtDb250YWN0fSBmcm9tICcuL2NvbnRhY3QubW9kZWwnO1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBwdWJsaWMgaWQ/OiBudW1iZXI7XG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGNoYXQ6IENoYXQ7XG4gIHB1YmxpYyBzZW5kZXI6IENvbnRhY3Q7XG4gIHB1YmxpYyByZWFkb25seSBjcmVhdGVkOiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgY3JlYXRlZCwgdGV4dCB9ID0gdGhpcztcbiAgICByZXR1cm4gYE1lc3NhZ2UgY3JlYXRlZCBhdDogJHtjcmVhdGVkfSAtIFRleHQ6ICR7dGV4dH1gO1xuICB9XG59XG4iXX0=