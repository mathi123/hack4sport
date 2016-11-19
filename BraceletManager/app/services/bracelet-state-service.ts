
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {BraceletState} from "../models/bracelet-state";

@Injectable()
export class BraceletStateService {

    constructor(private http: Http) {
        
    }

    save(state: BraceletState) {
        this.http.put("http://braceletbackend.azurewebsites.net/api/bracelet", JSON.stringify(state))
             .subscribe(() => console.log("state updated"));
    }
}