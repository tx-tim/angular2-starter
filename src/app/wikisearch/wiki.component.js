"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var wiki_service_1 = require('./wiki.service');
// import 'rxjs/Rx'; // import all rxjs operators
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
var WikisearchComponent = (function () {
    function WikisearchComponent(wikiService) {
        var _this = this;
        this.wikiService = wikiService;
        this.term = new forms_1.FormControl(); // automatically exposes an EventEmitter
        this.term.valueChanges // EventEmitter Is An RxJS Observable Stream
            .debounceTime(2000) // imported rx operator
            .distinctUntilChanged() // imported rx operator
            .subscribe(function (term) { return _this.wikiService.search(term).then(function (items) { return _this.items = items; }); });
    }
    WikisearchComponent = __decorate([
        core_1.Component({
            selector: 'as-wiki',
            templateUrl: 'app/wikisearch/wiki.html',
            providers: [wiki_service_1.WikiService]
        }), 
        __metadata('design:paramtypes', [wiki_service_1.WikiService])
    ], WikisearchComponent);
    return WikisearchComponent;
}());
exports.WikisearchComponent = WikisearchComponent;
//# sourceMappingURL=wiki.component.js.map