import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges, OnDestroy {
    @Input('prefix')
    prefix: string = '';

    urls: string[];
    private _routerSubscription: any;

    constructor(private router: Router, private breadcrumbService: BreadcrumbService) {
        this.urls = [];

        if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
        this._routerSubscription = this.router.events.subscribe((navigationEnd: NavigationEnd) => {
            this.urls.length = 0; // Fastest way to clear out array
            this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }

    ngOnInit() { }

    ngOnChanges(): void {
        if (!this.urls) {
            return;
        }

        this.urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    }

    generateBreadcrumbTrail(url: string): void {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this.urls.unshift(url);
        }

        if (url.lastIndexOf('/') > 0) {
            // Find last '/' and add everything before it as a parent route
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/')));
        } else if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    friendlyName(url: string): string {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    }

    ngOnDestroy(): void {
        this._routerSubscription.unsubscribe();
    }

}
