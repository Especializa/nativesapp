"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("color");
var NativeShadowDirective = (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.ngAfterViewInit = function () {
        if (this.nsShadow === null) {
            return;
        }
        if (typeof this.nsShadow === 'string') {
            this.nsShadow = {
                elevation: this.nsShadow ? parseInt(this.nsShadow, 10) : 2,
                shape: 'RECTANGLE',
                color: '#FFFFFF',
                cornerRadius: 20,
            };
        }
    };
    NativeShadowDirective.prototype.onLoaded = function () {
        if (this.nsShadow === null) {
            return;
        }
        var tnsView = this.el.nativeElement;
        if (tnsView.android && typeof this.nsShadow !== 'string') {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColor(android.graphics.Color.parseColor(this.nsShadow.color));
            shape.setCornerRadius(this.nsShadow.cornerRadius);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(this.nsShadow.elevation);
        }
        else if (tnsView.ios && typeof this.nsShadow !== 'string') {
            var elevation = parseFloat((this.nsShadow.elevation - 1).toFixed(2));
            tnsView.ios.layer.maskToBounds = false;
            tnsView.ios.layer.shadowColor = new color_1.Color('#000000').ios.CGColor;
            tnsView.ios.layer.shadowOffset = CGSizeMake(0, elevation);
            tnsView.ios.layer.shadowOpacity = 0.20;
            tnsView.ios.layer.shadowRadius = elevation - 1;
        }
    };
    return NativeShadowDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzQztBQUN0QywrQkFBOEI7QUFNOUIsSUFBYSxxQkFBcUI7SUFTaEMsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0QywrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsWUFBWSxFQUFFLEVBQUU7YUFDakIsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRXVCLHdDQUFRLEdBQVI7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMvRCxLQUFLLENBQUMsUUFBUSxDQUNaLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDckQsQ0FBQztZQUNGLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2RSxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDakQsQ0FBQztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUEvQ1U7SUFBUixZQUFLLEVBQUU7O3VEQU1KO0FBa0JvQjtJQUF2QixtQkFBWSxDQUFDLFFBQVEsQ0FBQzs7OztxREFzQnRCO0FBL0NVLHFCQUFxQjtJQURqQyxnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO3FDQVVYLGlCQUFVO0dBVHZCLHFCQUFxQixDQWdEakM7QUFoRFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsXG4gICAgICAgICBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XG5cbmRlY2xhcmUgY29uc3QgYW5kcm9pZDogYW55O1xuZGVjbGFyZSBjb25zdCBDR1NpemVNYWtlOiBhbnk7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuc1NoYWRvd10nfSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBuc1NoYWRvdz86IHN0cmluZyB8XG4gICAge1xuICAgICAgZWxldmF0aW9uOiBudW1iZXIsXG4gICAgICBzaGFwZTogJ1JFQ1RBTkdMRScgfCAnT1ZBTCcsXG4gICAgICBjb2xvcjogc3RyaW5nLFxuICAgICAgY29ybmVyUmFkaXVzOiBudW1iZXIsXG4gICAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5uc1NoYWRvdyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMubnNTaGFkb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLm5zU2hhZG93ID0ge1xuICAgICAgICBlbGV2YXRpb246IHRoaXMubnNTaGFkb3cgPyBwYXJzZUludCh0aGlzLm5zU2hhZG93LCAxMCkgOiAyLFxuICAgICAgICBzaGFwZTogJ1JFQ1RBTkdMRScsXG4gICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgIGNvcm5lclJhZGl1czogMjAsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2xvYWRlZCcpIG9uTG9hZGVkKCkge1xuICAgIGlmICh0aGlzLm5zU2hhZG93ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRuc1ZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRuc1ZpZXcuYW5kcm9pZCAmJiB0eXBlb2YgdGhpcy5uc1NoYWRvdyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHNoYXBlID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZSgpO1xuICAgICAgc2hhcGUuc2V0U2hhcGUoXG4gICAgICAgIGFuZHJvaWQuZ3JhcGhpY3MuZHJhd2FibGUuR3JhZGllbnREcmF3YWJsZS5SRUNUQU5HTEUsXG4gICAgICApO1xuICAgICAgc2hhcGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKHRoaXMubnNTaGFkb3cuY29sb3IpKTtcbiAgICAgIHNoYXBlLnNldENvcm5lclJhZGl1cyh0aGlzLm5zU2hhZG93LmNvcm5lclJhZGl1cyk7XG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcbiAgICAgIHRuc1ZpZXcuYW5kcm9pZC5zZXRFbGV2YXRpb24odGhpcy5uc1NoYWRvdy5lbGV2YXRpb24pO1xuICAgIH0gZWxzZSBpZiAodG5zVmlldy5pb3MgJiYgdHlwZW9mIHRoaXMubnNTaGFkb3cgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBlbGV2YXRpb24gPSBwYXJzZUZsb2F0KCh0aGlzLm5zU2hhZG93LmVsZXZhdGlvbiAtIDEpLnRvRml4ZWQoMikpO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIubWFza1RvQm91bmRzID0gZmFsc2U7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dDb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpLmlvcy5DR0NvbG9yO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgwLCBlbGV2YXRpb24pO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuMjA7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dSYWRpdXMgPSBlbGV2YXRpb24gLSAxO1xuICAgIH1cbiAgfVxufVxuIl19