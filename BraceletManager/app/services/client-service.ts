
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {

    constructor(private http: Http) {
        
    }

    getClients() : Promise<number> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.get("http://braceletbackend.azurewebsites.net/api/client", options)
            .toPromise()
            .then((r:Response) => r.json());
    }
}