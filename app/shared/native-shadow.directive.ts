import { AfterViewInit, Directive, ElementRef, HostListener,
         Input } from '@angular/core';
import { Color } from 'color';

declare const android: any;
declare const CGSizeMake: any;

@Directive({ selector: '[nsShadow]'})
export class NativeShadowDirective implements AfterViewInit {
  @Input() private nsShadow?: string |
    {
      elevation: number,
      shape: 'RECTANGLE' | 'OVAL',
      color: string,
      cornerRadius: number,
    };

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
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
  }

  @HostListener('loaded') onLoaded() {
    if (this.nsShadow === null) {
      return;
    }
    const tnsView = this.el.nativeElement;
    if (tnsView.android && typeof this.nsShadow !== 'string') {
      const shape = new android.graphics.drawable.GradientDrawable();
      shape.setShape(
        android.graphics.drawable.GradientDrawable[this.nsShadow.shape],
      );
      shape.setColor(android.graphics.Color.parseColor(this.nsShadow.color));
      shape.setCornerRadius(this.nsShadow.cornerRadius);
      tnsView.android.setBackgroundDrawable(shape);
      tnsView.android.setElevation(this.nsShadow.elevation);
    } else if (tnsView.ios && typeof this.nsShadow !== 'string') {
      const elevation = parseFloat((this.nsShadow.elevation - 1).toFixed(2));
      tnsView.ios.layer.maskToBounds = false;
      tnsView.ios.layer.shadowColor = new Color('#000000').ios.CGColor;
      tnsView.ios.layer.shadowOffset = CGSizeMake(0, elevation);
      tnsView.ios.layer.shadowOpacity = 0.20;
      tnsView.ios.layer.shadowRadius = elevation - 1;
    }
  }
}
