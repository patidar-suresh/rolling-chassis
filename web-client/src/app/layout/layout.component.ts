import { Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

import { BreadcrumbService } from '../core/breadcrumb/breadcrumb.service';
import { PageTitleService } from '../shared/page-title/page-title.service';

import * as Ps from 'perfect-scrollbar';
import * as screenfull from 'screenfull';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy {
    private _routerSubscription: Subscription;
    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    header: string;
    url: string;
    dark: boolean;
    boxed: boolean;
    collapseSidebar: boolean;
    compactSidebar: boolean;
    sidenavOpen: boolean = true;
    sidenavMode: string = 'side';
    isMobile: boolean = false;
    direction: string = 'ltr';
    isFullscreen: boolean = false;
    @ViewChild('sidenav') sidenav;

    constructor(private router: Router, private media: ObservableMedia,
        private breadcrumbService: BreadcrumbService, private pageTitleService: PageTitleService) {
        breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Dashboard');
        breadcrumbService.addFriendlyNameForRoute('/dashboard/common', 'Common');
        breadcrumbService.addFriendlyNameForRoute('/dashboard/admin', 'Admin');
        this._routerSubscription = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            this.url = event.url;
        });
    }

    ngOnInit() {

        this.pageTitleService.title.subscribe((val: string) => {
            this.header = val;
        });

        if (this.url !== '/user/signin' && this.url !== '/user/singup') {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');
            if (window.matchMedia(`(min-width: 960px)`).matches) {
                Ps.initialize(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
            }
        }

        this._mediaSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
            const isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
            this.isMobile = isMobile;
            this.sidenavMode = (isMobile) ? 'over' : 'side';
            this.sidenavOpen = !isMobile;
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && this.isMobile) {
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy() {
        this._routerEventsSubscription.unsubscribe();
        this._mediaSubscription.unsubscribe();
    }

    menuMouseOver(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
            this.sidenav.mode = 'over';
        }
    }

    toggleFullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
            this.isFullscreen = !this.isFullscreen;
        }
    }

    menuMouseOut(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
            this.sidenav.mode = 'side';
        }
    }

    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }

}
