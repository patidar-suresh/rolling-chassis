import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XHRBackend } from '@angular/http';

import { CustomRequestOptions } from './http/custom-request.options';
import { PageTitleService } from './page-title/page-title.service';
import { AaaService } from './aaa/aaa.service';
import { HttpService } from './http/http.service';
import { httpServiceFactory } from './http/http-service.factory';
import { LoaderService } from '../core/loader/loader.service';


@NgModule({})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                PageTitleService,
                AaaService,
                 {
                    provide: HttpService,
                    useFactory: httpServiceFactory,
                    deps: [XHRBackend, CustomRequestOptions, AaaService, LoaderService]
                }
            ]
        };
    }
}
