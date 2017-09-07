import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import {
    StateModel, AdministratorModel, CampaignCodeModel
} from '../models/types.model';



@Injectable()
export class ApiDataService {

    constructor(private http: Http) {

    }

    public getStates(): Observable<StateModel[]> {
        return this.http.get("app/files/states.json")
            .map((res: any) => res.json())
            .catch((error: Response | any, caught: Observable<any>): Observable<any> => {
                console.log(error);
                return error;
            });
    }

    public getCampaignCode(): Observable<CampaignCodeModel[]> {
        return this.http.get("app/files/campaign.json")
            .map((res: any) => res.json())
            .catch((error: Response | any, caught: Observable<any>): Observable<any> => {
                console.log(error);
                return error;
            });
    }

    public getAdmins(): Observable<AdministratorModel[]> {
        return this.http.get("app/files/admins.json")
            .map((res: any) => res.json())
            .catch((error: Response | any, caught: Observable<any>): Observable<any> => {
                console.log(error);
                return error;
            });
    }
}