"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.ngAfterViewInit = function () {
        if (this.nsShadow === '') {
            this.nsShadow = '2';
        }
    };
    NativeShadowDirective.prototype.onLoaded = function () {
        var tnsView = this.el.nativeElement;
        if (tnsView.android) {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColor(android.graphics.Color.WHITE);
            shape.setCornerRadius(20);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(parseInt(this.nsShadow));
        }
        else if (tnsView.ios) {
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
            tnsView.ios.layer.shadowOffset =
                CGSizeMake(0, parseFloat(this.nsShadow)) - 1;
            tnsView.ios.layer.shadowOpacity = 0.24;
            tnsView.ios.layer.shadowRadius = parseFloat(this.nsShadow) - 1;
        }
    };
    return NativeShadowDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NativeShadowDirective.prototype, "nsShadow", void 0);
__decorate([
    core_1.HostListener('loaded'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NativeShadowDirective.prototype, "onLoaded", null);
NativeShadowDirective = __decorate([
    core_1.Directive({ selector: '[nsShadow]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NativeShadowDirective);
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNxRDtBQUNyRCwrQkFBOEI7QUFNOUIsSUFBYSxxQkFBcUI7SUFHaEMsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ2xDLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRXVCLHdDQUFRLEdBQVI7UUFDdEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZO2dCQUM1QixVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakUsQ0FBQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE3QlU7SUFBUixZQUFLLEVBQUU7O3VEQUFrQjtBQVdGO0lBQXZCLG1CQUFZLENBQUMsUUFBUSxDQUFDOzs7O3FEQWlCdEI7QUE3QlUscUJBQXFCO0lBRGpDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7cUNBSVgsaUJBQVU7R0FIdkIscUJBQXFCLENBOEJqQztBQTlCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lcixcbiAgICAgICAgIElucHV0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ2NvbG9yJztcblxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIGNvbnN0IENHU2l6ZU1ha2U6IGFueTtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25zU2hhZG93XSd9KVxuZXhwb3J0IGNsYXNzIE5hdGl2ZVNoYWRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBuc1NoYWRvdzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5uc1NoYWRvdyA9PT0gJycpIHtcbiAgICAgIHRoaXMubnNTaGFkb3cgPSAnMic7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbG9hZGVkJykgb25Mb2FkZWQoKSB7XG4gICAgY29uc3QgdG5zVmlldyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodG5zVmlldy5hbmRyb2lkKSB7XG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5SRUNUQU5HTEUpO1xuICAgICAgc2hhcGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG4gICAgICBzaGFwZS5zZXRDb3JuZXJSYWRpdXMoMjApO1xuICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0RWxldmF0aW9uKHBhcnNlSW50KHRoaXMubnNTaGFkb3cpKTtcbiAgICB9IGVsc2UgaWYgKHRuc1ZpZXcuaW9zKSB7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5tYXNrVG9Cb3VuZHMgPSBmYWxzZTtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd0NvbG9yID0gbmV3IENvbG9yKCcjMDAwMDAwJykuaW9zLkNHQ29sb3I7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dPZmZzZXQgPVxuICAgICAgICBDR1NpemVNYWtlKDAsIHBhcnNlRmxvYXQodGhpcy5uc1NoYWRvdykpIC0gMTtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd09wYWNpdHkgPSAwLjI0O1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93UmFkaXVzID0gcGFyc2VGbG9hdCh0aGlzLm5zU2hhZG93KSAtIDE7XG4gICAgfVxuICB9XG59Il19