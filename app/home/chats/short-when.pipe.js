"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_1 = require("platform");
var parse = require("date-fns/parse");
var isToday = require("date-fns/is_today");
var isYesterday = require("date-fns/is_yesterday");
var ShortWhenPipe = /** @class */ (function () {
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
    ShortWhenPipe = __decorate([
        core_1.Pipe({
            name: 'shortWhen',
            pure: true
        })
    ], ShortWhenPipe);
    return ShortWhenPipe;
}());
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUEyQztBQUMzQyxxQ0FBa0M7QUFFbEMsc0NBQXdDO0FBQ3hDLDJDQUE2QztBQUM3QyxtREFBcUQ7QUFNckQ7SUFBQTtJQW9CQSxDQUFDO0lBbEJDLGlDQUFTLEdBQVQsVUFBVSxLQUE2QjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxpQkFBTSxDQUFDLFFBQVEsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxpQkFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsUUFBUSxJQUFJLE1BQUksaUJBQU0sQ0FBQyxNQUFRLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQU0sUUFBUSxHQUFHLElBQUksaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNyQixDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFuQlUsYUFBYTtRQUp6QixXQUFJLENBQUM7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7T0FDVyxhQUFhLENBb0J6QjtJQUFELG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tICdwbGF0Zm9ybSc7XG5cbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcbmltcG9ydCAqIGFzIGlzVG9kYXkgZnJvbSAnZGF0ZS1mbnMvaXNfdG9kYXknO1xuaW1wb3J0ICogYXMgaXNZZXN0ZXJkYXkgZnJvbSAnZGF0ZS1mbnMvaXNfeWVzdGVyZGF5JztcblxuQFBpcGUoe1xuICBuYW1lOiAnc2hvcnRXaGVuJyxcbiAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBTaG9ydFdoZW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfCBEYXRlKTogc3RyaW5nIHtcbiAgICBsZXQgbGFuZ3VhZ2UgPSBkZXZpY2UubGFuZ3VhZ2U7XG4gICAgaWYgKGRldmljZS5yZWdpb24pIHtcbiAgICAgIGxhbmd1YWdlICs9IGAtJHtkZXZpY2UucmVnaW9ufWA7XG4gICAgfVxuICAgIGNvbnN0IGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKGxhbmd1YWdlKTtcbiAgICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2UodmFsdWUpO1xuXG4gICAgaWYgKGlzVG9kYXkocGFyc2VkRGF0ZSkpIHtcbiAgICAgIHJldHVybiBkYXRlUGlwZS50cmFuc2Zvcm0ocGFyc2VkRGF0ZSwgJ3Nob3J0VGltZScpO1xuICAgIH1cblxuICAgIGlmIChpc1llc3RlcmRheShwYXJzZWREYXRlKSkge1xuICAgICAgcmV0dXJuICd5ZXN0ZXJkYXknO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRlUGlwZS50cmFuc2Zvcm0ocGFyc2VkRGF0ZSwgJ3Nob3J0RGF0ZScpO1xuICB9XG59XG4iXX0=