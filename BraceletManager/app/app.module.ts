import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http"
import { FormsModule} from "@angular/forms";

import { AppComponent }   from './app.component';
import { Dashboard } from './dashboard/dashboard.component'

import { routing } from './app.routing';
import {BraceletStateService} from "./services/bracelet-state-service";
import {ClientService} from "./services/client-service";

@NgModule({
    imports: [BrowserModule, routing, HttpModule, FormsModule],
    declarations: [AppComponent, Dashboard],
    providers: [BraceletStateService, ClientService],
    bootstrap: [AppComponent]
})

export class AppModule {}