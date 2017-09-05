"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    function Message(text, created) {
        if (text === void 0) { text = ''; }
        if (created === void 0) { created = Date.now(); }
        this.text = text;
        this.created = created;
    }
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNFLGlCQUFtQixJQUFpQixFQUNSLE9BQTRCO1FBRHJDLHFCQUFBLEVBQUEsU0FBaUI7UUFDUix3QkFBQSxFQUFBLFVBQWtCLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFEckMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNSLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQ3hELENBQUM7SUFDTSwwQkFBUSxHQUFmO1FBQ1EsSUFBQSxTQUF3QixFQUF0QixvQkFBTyxFQUFFLGNBQUksQ0FBVTtRQUMvQixNQUFNLENBQUMseUJBQXVCLE9BQU8saUJBQVksSUFBTSxDQUFDO0lBQzFELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZyA9ICcnLFxuICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY3JlYXRlZDogbnVtYmVyID0gRGF0ZS5ub3coKSkge1xuICB9XG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgY3JlYXRlZCwgdGV4dCB9ID0gdGhpcztcbiAgICByZXR1cm4gYE1lc3NhZ2UgY3JlYXRlZCBhdDogJHtjcmVhdGVkfSAtIFRleHQ6ICR7dGV4dH1gO1xuICB9XG59XG4iXX0=