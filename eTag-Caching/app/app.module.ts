import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, CanDeactivate } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EtagCachingAppComponent } from './etag-caching-app/etag-caching-app.component';
import { DataGridComponent } from './datagrid/datagrid.component';

import { ApiDataService } from './services/data.service'


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule,
        FormsModule
    ],
    declarations: [EtagCachingAppComponent, DataGridComponent],
    providers: [ApiDataService],
    bootstrap: [EtagCachingAppComponent]
})

export class AppModule { }
