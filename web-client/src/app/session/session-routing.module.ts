import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent,
    }, {
        path: 'signup',
        component: SignupComponent,
    }, {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
    }, {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SessionRoutingModule { }
