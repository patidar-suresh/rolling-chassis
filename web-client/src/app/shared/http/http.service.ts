import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';

import { CustomRequestOptions } from './custom-request.options';
import { AaaService } from '../aaa/aaa.service';
import { LoaderService } from '../../core/loader/loader.service';

@Injectable()
export class HttpService extends Http {

    apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor(
        backend: XHRBackend,
        defaultOptions: CustomRequestOptions,
        private aaa: AaaService,
        private loaderService: LoaderService
    ) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.showLoader();
        console.log('Received call for URL' + url);
        return super.get(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    request(url: string | Request, options?: RequestOptionsArgs) {
        return super.request(url, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    post(url: string, body: string, options?: RequestOptionsArgs) {
        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    put(url: string, body: string, options?: RequestOptionsArgs) {
        return super.put(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    delete(url: string, options?: RequestOptionsArgs) {
        return super.delete(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    patch(url: string, body: string, options?: RequestOptionsArgs) {
        return super.patch(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    head(url: string, options?: RequestOptionsArgs) {
        return super.head(this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                console.log('Reservid response in http service');
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new CustomRequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
        }

        // Add Authorization Header for all the requests
        const user = this.aaa.getLoggedInUser();
        const token = user && user.token;
        options.headers.append('Authorization', 'Bearer ' + token);

        return options;
    }

    private getFullUrl(url: string): string {
        return this.apiUrl + url;
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        console.log('Some Error:' + error);
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
        console.log('Reqest ended');
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}
