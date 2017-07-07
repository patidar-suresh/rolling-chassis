import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SessionRoutingModule } from './session-routing.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        FormsModule,
        MaterialModule,
        SessionRoutingModule,
        FlexLayoutModule
    ],
    declarations: [
        ForgotPasswordComponent,
        SigninComponent,
        SignupComponent
    ]
})
export class SessionModule { }
