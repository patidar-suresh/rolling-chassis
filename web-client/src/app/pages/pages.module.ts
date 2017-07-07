import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
    imports: [
        PagesRoutingModule
    ],
    declarations: [
        ForbiddenComponent,
        NotfoundComponent,
        UnauthorizedComponent
    ]
})
export class PagesModule { }
