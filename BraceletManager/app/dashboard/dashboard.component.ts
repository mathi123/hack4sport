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
            
    }

    public vibrate() {
        this.state.IsVibrating = true;
        this.service.save(this.state);
    }
}