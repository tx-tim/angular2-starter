import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WikiService } from './wiki.service';
// import 'rxjs/Rx'; // import all rxjs operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'as-wiki',
    templateUrl: 'app/wikisearch/wiki.html',
    providers: [WikiService]
})
export class WikisearchComponent {
    componentName: 'WikisearchComponent';
    term = new FormControl();   // automatically exposes an EventEmitter
    items: Array<string>;

    constructor(private wikiService: WikiService) {
        this.term.valueChanges      // EventEmitter Is An RxJS Observable Stream
             .debounceTime(2000)     // imported rx operator
             .distinctUntilChanged() // imported rx operator
             .subscribe(term => this.wikiService.search(term).then(items => this.items = items));
  }
}
