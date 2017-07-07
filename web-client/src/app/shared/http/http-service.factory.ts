import { XHRBackend } from '@angular/http';
import { CustomRequestOptions } from './custom-request.options';
import { HttpService } from './http.service';
import { AaaService } from '../aaa/aaa.service';
import { LoaderService } from '../../core/loader/loader.service';

function httpServiceFactory(
    backend: XHRBackend,
    options: CustomRequestOptions,
    aaaService: AaaService,
    loaderService: LoaderService) {
    return new HttpService(backend, options, aaaService, loaderService);
}

export { httpServiceFactory };