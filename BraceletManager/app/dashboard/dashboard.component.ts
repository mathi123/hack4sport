import { Component, OnInit } from '@angular/core';
import {BraceletStateService} from "../services/bracelet-state-service";
import {BraceletState} from "../models/bracelet-state";
import { Observable } from "rxjs/Observable";
import {ClientService} from "../services/client-service";

@Component({
    selector: 'dashboard',
    templateUrl: '/app/dashboard/dashboard.component.template.html'
})

export class Dashboard implements OnInit{
    state: BraceletState = new BraceletState();
    clients: number = 0;

    constructor(private service: BraceletStateService, private clientsService: ClientService) {
        this.state.Color = "white";
        this.state.VibrationInSeconds = 0.5;
    }
    
    ngOnInit(): void {
        this.refreshClients();
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

    countDown = 16;
    vibrations = 10;
    timer: number;
    colorList: string[] = ["#0275d8", "#5cb85c", "#f0ad4e", "#5bc0de", "#d9534f"];

    public startSequence() {
        if (this.timer != undefined) {
            // reset timer
            clearInterval(this.timer);
            console.log("Resetting timer");
        }

        this.countDown = 16;

        this.timer = setInterval(() => {
            this.countDown = this.countDown - 1;
            console.log("timer callback");

            if (this.countDown === 0) {
                clearInterval(this.timer);
                this.state.IsVibration = false;
                this.state.Text = "Thank you :-)";
                this.state.Color = "white";
            } else if (this.countDown < this.vibrations) {
                this.state.Text = "Get up bitches!!!";
                this.state.IsVibration = true;
                if (this.countDown % 2 === 0) {
                    this.state.Color = "#f0ad4e";
                } else {
                    this.state.Color = "#d9534f";
                }
            } else {
                let sec = (this.countDown - this.vibrations);
                this.state.Text = sec + "...";
                this.state.HasColor = true;
                this.state.Color = this.colorList[sec - 1];
            }

            this.save();
        }, 1000);

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