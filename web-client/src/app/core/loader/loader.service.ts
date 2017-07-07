import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from './loader';

@Injectable()

export class LoaderService {

    private loaderSubject = new Subject<LoaderState>();

    loaderState = this.loaderSubject.asObservable();

    private static loadingRequests: number = 0;

    constructor() { }

    show() {
        LoaderService.loadingRequests++;
        this.loaderSubject.next(<LoaderState>{ show: true });
    }

    hide() {
        LoaderService.loadingRequests--;
        if (LoaderService.loadingRequests <= 0) {
            LoaderService.loadingRequests = 0;
            this.loaderSubject.next(<LoaderState>{ show: false });
        }

    }
}