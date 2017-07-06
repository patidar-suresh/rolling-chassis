// Core Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

// Application modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

// Application Components
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CommonDashboardComponent } from './common-dashboard/common-dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [CommonDashboardComponent, AdminDashboardComponent],
    providers: []
})
export class DashboardModule { }