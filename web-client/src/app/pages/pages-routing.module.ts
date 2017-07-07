import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
    {
        path: 'forbidden',
        component: ForbiddenComponent
    }, {
        path: 'notfound',
        component: NotfoundComponent
    }, {
        path: 'unauthorized',
        component: UnauthorizedComponent
    }, {
        path: '',
        redirectTo: 'notfound',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
