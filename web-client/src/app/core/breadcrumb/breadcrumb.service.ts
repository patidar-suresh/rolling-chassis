import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbService {
    private routesFriendlyNames: Map<string, string> = new Map<string, string>();
    private routesWithCallback: Map<string, (string) => string> = new Map<string, (string) => string>();
    private hideRoutes: Array<string> = [];

    constructor() { }

    addFriendlyNameForRoute(route: string, name: string): void {
        this.routesFriendlyNames.set(route, name);
    }

    addCallbackForRoute(route: string, callback: (id: string) => string): void {
        this.routesWithCallback.set(route, callback);
    }

    getFriendlyNameForRoute(route: string): string {
        let name;
        const routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);

        this.routesFriendlyNames.forEach((value, key, map) => {
        if (key === route) {
            name = value;
        }
        });

        this.routesWithCallback.forEach((value, key, map) => {
        if (key === route) {
            name = value(routeEnd);
        }
        });

        return name ? name : routeEnd;
    }

    hideRoute(route: string): void {
        if (!(this.hideRoutes.indexOf(route) !== -1)) {
            this.hideRoutes.push(route);
        }
    }

    isRouteHidden(route: string): boolean {
        const hide = (this.hideRoutes.indexOf(route) !== -1);
        return hide;
    }
}
