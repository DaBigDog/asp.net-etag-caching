import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import {
    StateModel, AdministratorModel, CampaignCodeModel
} from '../models/data.model';



@Injectable()
export class ApiDataService {

    constructor(private http: Http) {

    }

    public getStates(): Observable<StateModel[]> {
        return this.http.get("api/state")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    public updateState(id: number, state: StateModel): Observable<StateModel> {

        return this.http.put("api/state/" + id, state)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }



    public getCampaignCode(): Observable<CampaignCodeModel[]> {
        return this.http.get("api/campaigncode")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    public getAdmins(): Observable<AdministratorModel[]> {
        return this.http.get("api/admin")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }





    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body;
    }

    private handleErrorObservable(error: Response | any) {
        console.log(error);
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }

}