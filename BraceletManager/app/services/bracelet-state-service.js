var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
export var BraceletStateService = (function () {
    function BraceletStateService(http) {
        this.http = http;
    }
    BraceletStateService.prototype.save = function (state) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        this.http.put("http://braceletbackend.azurewebsites.net/api/bracelet", JSON.stringify(state), options)
            .subscribe(function () { return console.log("state updated"); });
    };
    BraceletStateService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], BraceletStateService);
    return BraceletStateService;
}());
//# sourceMappingURL=bracelet-state-service.js.map