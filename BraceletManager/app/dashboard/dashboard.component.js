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
const core_1 = require('@angular/core');
const bracelet_state_service_1 = require("../services/bracelet-state-service");
const bracelet_state_1 = require("../models/bracelet-state");
let Dashboard = class Dashboard {
    constructor(service) {
        this.service = service;
        this.state = new bracelet_state_1.BraceletState();
        this.state.Color = "white";
    }
    vibrate() {
        this.state.IsVibration = true;
        if (this.state.Color === "white") {
            this.state.HasColor = true;
            this.state.Color = "green";
        }
        else {
            this.state.Color = "white";
        }
        this.service.save(this.state);
    }
};
Dashboard = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: '/app/dashboard/dashboard.component.template.html'
    }), 
    __metadata('design:paramtypes', [bracelet_state_service_1.BraceletStateService])
], Dashboard);
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map