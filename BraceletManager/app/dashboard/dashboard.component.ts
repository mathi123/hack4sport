import { Component } from '@angular/core';
import {BraceletStateService} from "../services/bracelet-state-service";
import {BraceletState} from "../models/bracelet-state";

@Component({
    selector: 'dashboard',
    templateUrl: '/app/dashboard/dashboard.component.template.html'
})

export class Dashboard {
    state: BraceletState = new BraceletState();

    constructor(private service: BraceletStateService) {
        this.state.Color = "white";
    }

    public vibrate() {
        this.state.IsVibration = true;
        if (this.state.Color === "white") {
            this.state.HasColor = true;
            this.state.Color = "green";
        } else {
            this.state.Color = "white";
        }
        this.service.save(this.state);
    }
}