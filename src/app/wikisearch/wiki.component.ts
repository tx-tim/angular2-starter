import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
    selector: 'as-wiki',
    templateUrl: 'app/wikisearch/wiki.html',
    providers: [WikiService]
})
export class WikisearchComponent {
    componentName: 'WikisearchComponent';
    items: Array<string>;

    constructor(private wikiService: WikiService) {}

    search(term) {
      this.wikiService.search(term)
                           .then(items => this.items = items);
    }
}
