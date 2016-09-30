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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var index_1 = require('./index');
// import 'rxjs/RX';
var WikisearchModule = (function () {
    function WikisearchModule() {
    }
    WikisearchModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_1.WikisearchComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [
                index_1.WikiService
            ],
            exports: [
                index_1.WikisearchComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], WikisearchModule);
    return WikisearchModule;
}());
exports.WikisearchModule = WikisearchModule;
//# sourceMappingURL=wiki.module.js.map