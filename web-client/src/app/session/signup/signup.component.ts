import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    register() {
        // Logic to register goes here
    }

}
