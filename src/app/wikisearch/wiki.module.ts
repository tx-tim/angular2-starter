import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { WikisearchComponent, WikiService } from './index';

@NgModule({
    declarations: [
        WikisearchComponent
    ],
    imports: [
        BrowserModule,
        JsonpModule
    ],
    providers: [
        WikiService
    ],
    exports: [
        WikisearchComponent
    ]
})
export class WikisearchModule {
}
