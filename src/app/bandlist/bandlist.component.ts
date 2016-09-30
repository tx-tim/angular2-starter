import { Component } from '@angular/core';

import { Band } from './band.model';
// import { WikipediaService } from '../wikisearch/wiki.service';

@Component({
    selector: 'as-bandlist',
    templateUrl: 'app/bandlist/bandlist.html'
})
export class BandlistComponent {
    public band: Band;
    private list: Band[];

    constructor() {
        // wikisearch.search();
        this.band = new Band('band1', 'genre1');
        this.list = [
            new Band('Iron Maiden', ''),
            new Band('Ufomammut', '')
        ];
        // get the bandlist from an http request
    }
}
