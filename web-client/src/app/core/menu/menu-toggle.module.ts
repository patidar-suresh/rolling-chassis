import { NgModule } from '@angular/core';

import { MenuToggleAnchorDirective } from './menu-toggle-anchor.directive';
import { MenuToggleLinkDirective } from './menu-toggle-link.directive';
import { MenuToggleDirective } from './menu-toggle.directive';

@NgModule({
  declarations: [
    MenuToggleAnchorDirective,
    MenuToggleLinkDirective,
    MenuToggleDirective,
  ],
  exports: [
    MenuToggleAnchorDirective,
    MenuToggleLinkDirective,
    MenuToggleDirective,
   ],
})
export class MenuToggleModule { }