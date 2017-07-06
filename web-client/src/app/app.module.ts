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

// Application components
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

// Configuration for Perfect Scroll Bar
const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserAnimationsModule,
        RoutingModule,
        PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
        MenuToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
