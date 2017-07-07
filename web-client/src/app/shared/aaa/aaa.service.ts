import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AaaService {

    isLoggedIn = true;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor() {
        console.log('AAA Service constructor called !');
    }

    login(userName, password): Observable<boolean> {
        const payload = {
            username: userName,
            password: password
        }
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isUserLoggedIn(): boolean {
        return this.isLoggedIn
    }

    getLoggedInUser(): any {
        return {
            userId: 'abc',
            token: '123'
        }
    }

}
