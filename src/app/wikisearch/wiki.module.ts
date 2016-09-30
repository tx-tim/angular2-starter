import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WikisearchComponent, WikiService } from './index';
// import 'rxjs/RX';

@NgModule({
    declarations: [
        WikisearchComponent
    ],
    imports: [
        BrowserModule,
        JsonpModule,
        ReactiveFormsModule
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
