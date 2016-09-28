import { Component } from '@angular/core';

import { Band } from './band.model';

@Component({
    selector: 'as-bandlist',
    templateUrl: 'app/bandlist/bandlist.html'
})
export class BandlistComponent {
    public band: Band;
    private list: Band[];

    constructor() {
        this.band = new Band('band1', 'genre1');
        this.list = [
            new Band('BAnd1', 'genre1'),
            new Band('Band2', 'genre2')
        ];
        // get the bandlist from an http request
    }
}
