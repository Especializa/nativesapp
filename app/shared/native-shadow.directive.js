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
            shape.setCornerRadius(30);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(parseInt(this.nsShadow, 10));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzQztBQUN0QywrQkFBOEI7QUFNOUIsSUFBYSxxQkFBcUI7SUFHaEMsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQ2xDLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRXVCLHdDQUFRLEdBQVI7UUFDdEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWTtnQkFDNUIsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDSCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBN0JVO0lBQVIsWUFBSyxFQUFFOzt1REFBMEI7QUFXVjtJQUF2QixtQkFBWSxDQUFDLFFBQVEsQ0FBQzs7OztxREFpQnRCO0FBN0JVLHFCQUFxQjtJQURqQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO3FDQUlYLGlCQUFVO0dBSHZCLHFCQUFxQixDQThCakM7QUE5Qlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsXG4gICAgICAgICBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuc1NoYWRvd10nfSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBuc1NoYWRvdzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5uc1NoYWRvdyA9PT0gJycpIHtcbiAgICAgIHRoaXMubnNTaGFkb3cgPSAnMic7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbG9hZGVkJykgb25Mb2FkZWQoKSB7XG4gICAgY29uc3QgdG5zVmlldyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodG5zVmlldy5hbmRyb2lkKSB7XG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgIHNoYXBlLnNldFNoYXBlKGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5SRUNUQU5HTEUpO1xuICAgICAgc2hhcGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG4gICAgICBzaGFwZS5zZXRDb3JuZXJSYWRpdXMoMzApO1xuICAgICAgdG5zVmlldy5hbmRyb2lkLnNldEJhY2tncm91bmREcmF3YWJsZShzaGFwZSk7XG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0RWxldmF0aW9uKHBhcnNlSW50KHRoaXMubnNTaGFkb3csIDEwKSk7XG4gICAgfSBlbHNlIGlmICh0bnNWaWV3Lmlvcykge1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIubWFza1RvQm91bmRzID0gZmFsc2U7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dDb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpLmlvcy5DR0NvbG9yO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID1cbiAgICAgICAgQ0dTaXplTWFrZSgwLCBwYXJzZUZsb2F0KHRoaXMubnNTaGFkb3cpKSAtIDE7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dPcGFjaXR5ID0gMC4yNDtcbiAgICAgIHRuc1ZpZXcuaW9zLmxheWVyLnNoYWRvd1JhZGl1cyA9IHBhcnNlRmxvYXQodGhpcy5uc1NoYWRvdykgLSAxO1xuICAgIH1cbiAgfVxufVxuIl19