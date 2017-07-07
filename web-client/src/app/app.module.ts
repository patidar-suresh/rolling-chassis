// Core Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout"
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

// Third Party Modules
import 'hammerjs';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// Application Modules
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { RoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// Application Services
import { BreadcrumbService } from './core/breadcrumb/breadcrumb.service';
import { LoaderService } from './core/loader/loader.service';
import { CustomRequestOptions } from './shared/http/custom-request.options';

// Application components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
import { LoaderComponent } from './core/loader/loader.component';

// Configuration for Perfect Scroll Bar
const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        BreadcrumbComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserAnimationsModule,
        RoutingModule,
        SharedModule.forRoot(),
        PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
        MenuToggleModule
    ],
    providers: [
        BreadcrumbService,
        LoaderService,
        CustomRequestOptions
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
