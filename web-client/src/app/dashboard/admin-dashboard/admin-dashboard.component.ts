import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeInAnimation } from '../../core/animations/animations';
import { PageTitleService } from '../../shared/page-title/page-title.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
    animations: [fadeInAnimation]
})
export class AdminDashboardComponent implements OnInit {
    @HostBinding('@fadeInAnimation') fadeInAnimation = true;
    constructor(private pageTitleService: PageTitleService) {
        this.pageTitleService.setTitle('Admin Dashboard');
    }

    ngOnInit() {
    }

}
