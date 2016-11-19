
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import {BraceletState} from "../models/bracelet-state";

@Injectable()
export class BraceletStateService {

    constructor(private http: Http) {
        
    }

    save(state: BraceletState) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put("http://braceletbackend.azurewebsites.net/api/bracelet", JSON.stringify(state), options)
             .subscribe(() => console.log("state updated"));
    }
}