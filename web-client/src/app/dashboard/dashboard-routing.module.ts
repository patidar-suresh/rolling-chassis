import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommonDashboardComponent } from './common-dashboard/common-dashboard.component';

const routes: Routes = [
    {
        path: 'common',
        component: CommonDashboardComponent
    }, {
        path: 'admin',
        component: AdminDashboardComponent
    }, {
        path: '',
        redirectTo: 'common',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
