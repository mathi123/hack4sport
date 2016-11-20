"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bracelet_state_service_1 = require("../services/bracelet-state-service");
var bracelet_state_1 = require("../models/bracelet-state");
var client_service_1 = require("../services/client-service");
var Dashboard = (function () {
    function Dashboard(service, clientsService) {
        this.service = service;
        this.clientsService = clientsService;
        this.state = new bracelet_state_1.BraceletState();
        this.clients = 0;
        this.countDown = 16;
        this.vibrations = 10;
        this.colorList = ["#0275d8", "#5cb85c", "#f0ad4e", "#5bc0de", "#d9534f"];
        this.state.Color = "white";
        this.state.VibrationInSeconds = 0.5;
    }
    Dashboard.prototype.ngOnInit = function () {
        this.refreshClients();
    };
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
    Dashboard.prototype.refreshClients = function () {
        var _this = this;
        this.clientsService.getClients()
            .then(function (clients) { return _this.clients = clients; });
    };
    Dashboard.prototype.startSequence = function () {
        var _this = this;
        if (this.timer != undefined) {
            // reset timer
            clearInterval(this.timer);
            console.log("Resetting timer");
        }
        this.countDown = 16;
        this.timer = setInterval(function () {
            _this.countDown = _this.countDown - 1;
            console.log("timer callback");
            if (_this.countDown === 0) {
                clearInterval(_this.timer);
                _this.state.IsVibration = false;
                _this.state.Text = "Thank you :-)";
                _this.state.Color = "white";
            }
            else if (_this.countDown < _this.vibrations) {
                _this.state.Text = "Get up bitches!!!";
                _this.state.IsVibration = true;
                if (_this.countDown % 2 === 0) {
                    _this.state.Color = "#f0ad4e";
                }
                else {
                    _this.state.Color = "#d9534f";
                }
            }
            else {
                var sec = (_this.countDown - _this.vibrations);
                _this.state.Text = sec + "...";
                _this.state.HasColor = true;
                _this.state.Color = _this.colorList[sec - 1];
            }
            _this.save();
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
    };
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: '/app/dashboard/dashboard.component.template.html'
        }), 
        __metadata('design:paramtypes', [bracelet_state_service_1.BraceletStateService, client_service_1.ClientService])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map