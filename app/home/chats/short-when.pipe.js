"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_1 = require("platform");
var parse = require("date-fns/parse");
var isToday = require("date-fns/is_today");
var isYesterday = require("date-fns/is_yesterday");
var ShortWhenPipe = (function () {
    function ShortWhenPipe() {
    }
    ShortWhenPipe.prototype.transform = function (value) {
        var language = platform_1.device.language;
        if (platform_1.device.region) {
            language += "-" + platform_1.device.region;
        }
        var datePipe = new common_1.DatePipe(language);
        console.log(language);
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
        pure: true
    })
], ShortWhenPipe);
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUEyQztBQUMzQyxxQ0FBa0M7QUFFbEMsc0NBQXdDO0FBQ3hDLDJDQUE2QztBQUM3QyxtREFBcUQ7QUFNckQsSUFBYSxhQUFhO0lBQTFCO0lBcUJBLENBQUM7SUFuQkMsaUNBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ3JDLElBQUksUUFBUSxHQUFHLGlCQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLElBQUksTUFBSSxpQkFBTSxDQUFDLE1BQVEsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGFBQWE7SUFKekIsV0FBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLFdBQVc7UUFDakIsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0dBQ1csYUFBYSxDQXFCekI7QUFyQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcbmltcG9ydCAqIGFzIGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNfdG9kYXknO1xuaW1wb3J0ICogYXMgaXNZZXN0ZXJkYXkgZnJvbSAnZGF0ZS1mbnMvaXNfeWVzdGVyZGF5JztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2hvcnRXaGVuJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBTaG9ydFdoZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlKTogc3RyaW5nIHtcbiAgICBsZXQgbGFuZ3VhZ2UgPSBkZXZpY2UubGFuZ3VhZ2U7XG4gICAgaWYgKGRldmljZS5yZWdpb24pIHtcbiAgICAgIGxhbmd1YWdlICs9IGAtJHtkZXZpY2UucmVnaW9ufWA7XG4gICAgfVxuICAgIGNvbnN0IGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKGxhbmd1YWdlKTtcbiAgICBjb25zb2xlLmxvZyhsYW5ndWFnZSk7XG4gICAgY29uc3QgcGFyc2VkRGF0ZSA9IHBhcnNlKHZhbHVlKTtcblxuICAgIGlmIChpc1RvZGF5KHBhcnNlZERhdGUpKSB7XG4gICAgICByZXR1cm4gZGF0ZVBpcGUudHJhbnNmb3JtKHBhcnNlZERhdGUsICdzaG9ydFRpbWUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNZZXN0ZXJkYXkocGFyc2VkRGF0ZSkpIHtcbiAgICAgIHJldHVybiAneWVzdGVyZGF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZVBpcGUudHJhbnNmb3JtKHBhcnNlZERhdGUsICdzaG9ydERhdGUnKTtcbiAgfVxufVxuIl19