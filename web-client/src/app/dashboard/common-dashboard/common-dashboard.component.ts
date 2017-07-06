import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeInAnimation } from '../../core/animations/animations';
import { PageTitleService } from '../../shared/page-title/page-title.service';

@Component({
    selector: 'app-common-dashboard',
    templateUrl: './common-dashboard.component.html',
    styleUrls: ['./common-dashboard.component.scss'],
    animations: [fadeInAnimation]
})
export class CommonDashboardComponent implements OnInit {
    @HostBinding('@fadeInAnimation') fadeInAnimation = true;

    constructor(private pageTitleService: PageTitleService) {
        this.pageTitleService.setTitle('Common Dashboard');
    }
    ngOnInit() {
    }

}
