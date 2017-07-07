import { XHRBackend } from '@angular/http';
import { CustomRequestOptions } from './custom-request.options';
import { HttpService } from './http.service';
import { AuthService } from '../auth/auth.service';
import { LoaderService } from '../../core/loader/loader.service';

function httpServiceFactory(
    backend: XHRBackend,
    options: CustomRequestOptions,
    authService: AuthService,
    loaderService: LoaderService) {
    return new HttpService(backend, options, authService, loaderService);
}

export { httpServiceFactory };