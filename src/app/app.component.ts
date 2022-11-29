import {Component} from '@angular/core';
import {share, timer} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'PWAOfflineNotStarting';
    caches: any = [];

    constructor() {
        timer(10000, 60000).pipe(share()).subscribe(_ => {
            this.caches = [];
            caches.keys().then(keys => {
                this.caches = keys;
            })
        })
    }
}
