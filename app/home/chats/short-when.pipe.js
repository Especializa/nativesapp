"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var isToday = require("date-fns/is_today");
var isYesterday = require("date-fns/is_yesterday");
var parse = require("date-fns/parse");
var ShortWhenPipe = (function () {
    function ShortWhenPipe() {
    }
    ShortWhenPipe.prototype.transform = function (value) {
        var language = platform_1.device.language;
        if (platform_1.device.region) {
            language += "-" + platform_1.device.region;
        }
        var datePipe = new common_1.DatePipe(language);
        var parsedDate = parse(value);
        if (isToday(parsedDate)) {
            return datePipe.transform(parsedDate, 'shortTime');
        }
        if (isYesterday(parsedDate)) {
            return 'yesterday';
        }
        return datePipe.transform(parsedDate, 'shortDate');
    };
    return ShortWhenPipe;
}());
ShortWhenPipe = __decorate([
    core_1.Pipe({
        name: 'shortWhen',
        pure: true,
    })
], ShortWhenPipe);
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQTJDO0FBQzNDLHNDQUFvRDtBQUNwRCxxQ0FBa0M7QUFFbEMsMkNBQTZDO0FBQzdDLG1EQUFxRDtBQUNyRCxzQ0FBd0M7QUFNeEMsSUFBYSxhQUFhO0lBQTFCO0lBb0JBLENBQUM7SUFsQkMsaUNBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ3JDLElBQUksUUFBUSxHQUFHLGlCQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLElBQUksTUFBSSxpQkFBTSxDQUFDLE1BQVEsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBSnpCLFdBQUksQ0FBQztRQUNKLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztHQUNXLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5pbXBvcnQgKiBhcyBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzX3RvZGF5JztcbmltcG9ydCAqIGFzIGlzWWVzdGVyZGF5IGZyb20gJ2RhdGUtZm5zL2lzX3llc3RlcmRheSc7XG5pbXBvcnQgKiBhcyBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3Nob3J0V2hlbicsXG4gIHB1cmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFNob3J0V2hlblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBzdHJpbmcge1xuICAgIGxldCBsYW5ndWFnZSA9IGRldmljZS5sYW5ndWFnZTtcbiAgICBpZiAoZGV2aWNlLnJlZ2lvbikge1xuICAgICAgbGFuZ3VhZ2UgKz0gYC0ke2RldmljZS5yZWdpb259YDtcbiAgICB9XG4gICAgY29uc3QgZGF0ZVBpcGUgPSBuZXcgRGF0ZVBpcGUobGFuZ3VhZ2UpO1xuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZSh2YWx1ZSk7XG5cbiAgICBpZiAoaXNUb2RheShwYXJzZWREYXRlKSkge1xuICAgICAgcmV0dXJuIGRhdGVQaXBlLnRyYW5zZm9ybShwYXJzZWREYXRlLCAnc2hvcnRUaW1lJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzWWVzdGVyZGF5KHBhcnNlZERhdGUpKSB7XG4gICAgICByZXR1cm4gJ3llc3RlcmRheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVQaXBlLnRyYW5zZm9ybShwYXJzZWREYXRlLCAnc2hvcnREYXRlJyk7XG4gIH1cbn1cbiJdfQ==