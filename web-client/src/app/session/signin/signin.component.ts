import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AaaService } from '../../shared/aaa/aaa.service'
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {
    public user = {username: '', password: ''};
    public errorMsg = '';

    constructor(private aaaService: AaaService, private router: Router) { }

    ngOnInit() {
    }

    login() {
        if(!this.aaaService.login(this.user.username,this.user.password)){
            this.errorMsg = 'Failed to login! try again ...';
        } else {
            this.router.navigate(['/']);
        }
    }

}
