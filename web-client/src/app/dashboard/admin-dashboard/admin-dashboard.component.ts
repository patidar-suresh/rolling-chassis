import { Component, OnInit, HostBinding } from '@angular/core';

import { fadeInAnimation } from '../../core/animations/animations';
import { PageTitleService } from '../../shared/page-title/page-title.service';
//TODO : Remove Service reference. It should be encapsulated in another business service
import { HttpService } from '../../shared/http/http.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
    animations: [fadeInAnimation]
})
export class AdminDashboardComponent implements OnInit {
    @HostBinding('@fadeInAnimation') fadeInAnimation = true;

    posts = [];
    errorMessage:string;

    constructor(private pageTitleService: PageTitleService, private http: HttpService) {
        this.pageTitleService.setTitle('Admin Dashboard');
    }

    ngOnInit() {
        this.getPost();
    }

    getPost() {
        this.http.get('/posts').subscribe(
            resp => { this.posts = resp.json(); },
            error => { this.errorMessage = 'Error occured in getting data from the server!'}
        );
    }

}
