import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LayoutComponent } from './layout/layout.component';

const appRoutes: Routes = [
    {
        path: 'session',
        loadChildren: 'app/session/session.module#SessionModule'
    }, {
        path: 'pages',
        loadChildren: 'app/pages/pages.module#PagesModule'
    }, {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }, {
        path: '**',
        redirectTo: 'pages/notfound'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }