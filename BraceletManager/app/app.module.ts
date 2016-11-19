import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http"

import { AppComponent }   from './app.component';
import { Dashboard } from './dashboard/dashboard.component'

import { routing } from './app.routing';
import {BraceletStateService} from "./services/bracelet-state-service";

@NgModule({
    imports: [BrowserModule, routing, HttpModule],
    declarations: [AppComponent, Dashboard],
    providers: [BraceletStateService],
    bootstrap: [AppComponent]
})

export class AppModule {}