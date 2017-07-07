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

    get(url: string, options?: RequestOptionsArgs, apiSettings?: ApiSettings): Observable<any> {
        this.showLoader(apiSettings);
        return super.get(this.getFullUrl(url, apiSettings), this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd(apiSettings);
            });
    }

    // request(url: string | Request, options?: RequestOptionsArgs) {
    //     return super.request(url, this.requestOptions(options))
    //         .catch(this.onCatch)
    //         .do((res: Response) => {
    //             this.onSuccess(res);
    //         }, (error: any) => {
    //             this.onError(error);
    //         })
    //         .finally(() => {
    //             this.onEnd();
    //         });
    // }

    post(url: string, body: string, options?: RequestOptionsArgs) {
        return super.post(this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do((res: Response) => {
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

    private getFullUrl(url: string, apiSettings?: ApiSettings): string {
        if (apiSettings && apiSettings.is_full_url) {
            return url;
        } else {
            return this.apiUrl + url;
        }
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        console.log('Error:' + error);
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
    }

    private onError(res: Response): void {
    }

    private onEnd(apiSettings?: ApiSettings): void {
        this.hideLoader(apiSettings);
    }

    private showLoader(apiSettings?: ApiSettings): void {        
        if (!apiSettings || !apiSettings.disable_loader) {
            this.loaderService.show();
        }
    }

    private hideLoader(apiSettings?: ApiSettings): void {
        if (!apiSettings || !apiSettings.disable_loader) {
            this.loaderService.hide();
        }
    }
}


export class ApiSettings {
    disable_loader: boolean = false;
    is_full_url: boolean = false;
}
