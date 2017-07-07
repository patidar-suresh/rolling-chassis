import { Injectable } from '@angular/core';
import { BaseRequestOptions } from '@angular/http';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {

    public token: string;

    constructor () {
        super();        
        this.headers.append('Content-Type', 'application/json');
        // this.headers.append('Authorization', 'Bearer ' + this.token );
    }    
}