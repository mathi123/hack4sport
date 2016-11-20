import { Component } from '@angular/core';
import {BraceletStateService} from "../services/bracelet-state-service";
import {BraceletState} from "../models/bracelet-state";
import { Observable } from "rxjs/Observable";
import {ClientService} from "../services/client-service";

@Component({
    selector: 'dashboard',
    templateUrl: '/app/dashboard/dashboard.component.template.html'
})

export class Dashboard {
    state: BraceletState = new BraceletState();
    clients: number = 0;

    constructor(private service: BraceletStateService, private clientsService: ClientService) {
        this.state.Color = "white";
        this.state.VibrationInSeconds = 0.5;
    }

    public vibrate() {
        this.state.IsVibration = true;
        this.save();
        this.state.IsVibration = false;
    }

    public save() {
        this.service.save(this.state);
    }

    public setColor(color: string) {
        this.state.HasColor = true;
        this.state.Color = color;
        this.save();
    }

    public setText(text: string) {
        this.state.Text = text;
        this.save();
    }

    public refreshClients() {
        this.clientsService.getClients()
            .then((clients: number) => this.clients = clients);
    }

    public startSequence() {
        const start = 10;

        //Observable
        //    .timer(100, 100) // timer(firstValueDelay, intervalBetweenValues)
        //    .map(i => start - i)
        //    .take(start + 1)
        //    .subscribe(i => console.log(i));

        //// or
        //Observable
        //    .range(0, start + 1)
        //    .map(i => start - i)
        //    .subscribe(i => console.log(i));
    }
}