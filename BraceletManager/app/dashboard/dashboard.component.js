var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BraceletStateService } from "../services/bracelet-state-service";
import { BraceletState } from "../models/bracelet-state";
export var Dashboard = (function () {
    function Dashboard(service) {
        this.service = service;
        this.state = new BraceletState();
        this.state.Color = "white";
        this.state.VibrationInSeconds = 0.5;
    }
    Dashboard.prototype.vibrate = function () {
        this.state.IsVibration = true;
        this.save();
        this.state.IsVibration = false;
    };
    Dashboard.prototype.save = function () {
        this.service.save(this.state);
    };
    Dashboard.prototype.setColor = function (color) {
        this.state.HasColor = true;
        this.state.Color = color;
        this.save();
    };
    Dashboard.prototype.setText = function (text) {
        this.state.Text = text;
        this.save();
    };
    Dashboard.prototype.countDown = function () {
        var start = 10;
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
    };
    Dashboard = __decorate([
        Component({
            selector: 'dashboard',
            templateUrl: '/app/dashboard/dashboard.component.template.html'
        }), 
        __metadata('design:paramtypes', [BraceletStateService])
    ], Dashboard);
    return Dashboard;
}());
//# sourceMappingURL=dashboard.component.js.map