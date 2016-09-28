import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BandlistComponent } from './index';
import { WikisearchModule } from '../wikisearch/wiki.module';

@NgModule({
    declarations: [
        BandlistComponent
    ],
    imports: [
        BrowserModule,
        WikisearchModule
    ],
    exports: [
        BandlistComponent
    ]
})
export class BandlistModule {
}
