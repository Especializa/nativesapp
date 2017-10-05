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
            shape.setShape(android.graphics.drawable.GradientDrawable[this.nsShadow.shape]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXRpdmUtc2hhZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzQztBQUN0QywrQkFBOEI7QUFNOUIsSUFBYSxxQkFBcUI7SUFTaEMsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUV0QywrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsWUFBWSxFQUFFLEVBQUU7YUFDakIsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRXVCLHdDQUFRLEdBQVI7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQU0sS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMvRCxLQUFLLENBQUMsUUFBUSxDQUNaLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hFLENBQUM7WUFDRixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdkUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDSCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBL0NVO0lBQVIsWUFBSyxFQUFFOzt1REFNSjtBQWtCb0I7SUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7Ozs7cURBc0J0QjtBQS9DVSxxQkFBcUI7SUFEakMsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztxQ0FVWCxpQkFBVTtHQVR2QixxQkFBcUIsQ0FnRGpDO0FBaERZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLFxuICAgICAgICAgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcbmRlY2xhcmUgY29uc3QgQ0dTaXplTWFrZTogYW55O1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbnNTaGFkb3ddJ30pXG5leHBvcnQgY2xhc3MgTmF0aXZlU2hhZG93RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHByaXZhdGUgbnNTaGFkb3c/OiBzdHJpbmcgfFxuICAgIHtcbiAgICAgIGVsZXZhdGlvbjogbnVtYmVyLFxuICAgICAgc2hhcGU6ICdSRUNUQU5HTEUnIHwgJ09WQUwnLFxuICAgICAgY29sb3I6IHN0cmluZyxcbiAgICAgIGNvcm5lclJhZGl1czogbnVtYmVyLFxuICAgIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubnNTaGFkb3cgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm5zU2hhZG93ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5uc1NoYWRvdyA9IHtcbiAgICAgICAgZWxldmF0aW9uOiB0aGlzLm5zU2hhZG93ID8gcGFyc2VJbnQodGhpcy5uc1NoYWRvdywgMTApIDogMixcbiAgICAgICAgc2hhcGU6ICdSRUNUQU5HTEUnLFxuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICBjb3JuZXJSYWRpdXM6IDIwLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdsb2FkZWQnKSBvbkxvYWRlZCgpIHtcbiAgICBpZiAodGhpcy5uc1NoYWRvdyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0bnNWaWV3ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0bnNWaWV3LmFuZHJvaWQgJiYgdHlwZW9mIHRoaXMubnNTaGFkb3cgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcbiAgICAgIHNoYXBlLnNldFNoYXBlKFxuICAgICAgICBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGVbdGhpcy5uc1NoYWRvdy5zaGFwZV0sXG4gICAgICApO1xuICAgICAgc2hhcGUuc2V0Q29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKHRoaXMubnNTaGFkb3cuY29sb3IpKTtcbiAgICAgIHNoYXBlLnNldENvcm5lclJhZGl1cyh0aGlzLm5zU2hhZG93LmNvcm5lclJhZGl1cyk7XG4gICAgICB0bnNWaWV3LmFuZHJvaWQuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcbiAgICAgIHRuc1ZpZXcuYW5kcm9pZC5zZXRFbGV2YXRpb24odGhpcy5uc1NoYWRvdy5lbGV2YXRpb24pO1xuICAgIH0gZWxzZSBpZiAodG5zVmlldy5pb3MgJiYgdHlwZW9mIHRoaXMubnNTaGFkb3cgIT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBlbGV2YXRpb24gPSBwYXJzZUZsb2F0KCh0aGlzLm5zU2hhZG93LmVsZXZhdGlvbiAtIDEpLnRvRml4ZWQoMikpO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIubWFza1RvQm91bmRzID0gZmFsc2U7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dDb2xvciA9IG5ldyBDb2xvcignIzAwMDAwMCcpLmlvcy5DR0NvbG9yO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T2Zmc2V0ID0gQ0dTaXplTWFrZSgwLCBlbGV2YXRpb24pO1xuICAgICAgdG5zVmlldy5pb3MubGF5ZXIuc2hhZG93T3BhY2l0eSA9IDAuMjA7XG4gICAgICB0bnNWaWV3Lmlvcy5sYXllci5zaGFkb3dSYWRpdXMgPSBlbGV2YXRpb24gLSAxO1xuICAgIH1cbiAgfVxufVxuIl19