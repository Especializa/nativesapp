import { NgModule } from '@angular/core';

import { NativeShadowDirective } from './native-shadow.directive';

@NgModule({
  imports: [],
  declarations: [
    NativeShadowDirective
  ],
  exports: [
    NativeShadowDirective
  ],
  providers: []
})
export class SharedModule { }
