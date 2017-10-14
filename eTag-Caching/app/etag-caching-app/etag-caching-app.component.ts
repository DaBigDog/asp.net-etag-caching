﻿import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { ApiDataService } from '../services/data.service'
import { StateModel, AdministratorModel, CampaignCodeModel } from '../models/data.model';
import { Column } from '../models/column';

@Component({
    selector: 'etag-caching-app',
    templateUrl: '/app/etag-caching-app/etag-caching-app.html'
})

export class EtagCachingAppComponent {

    private states: Array<StateModel> = new Array<StateModel>();
    private stateColumns: Array<Column> = new Array<Column>();

    private campaignCodes: Array<CampaignCodeModel> = new Array<CampaignCodeModel>();
    private campaignCodeColumns: Array<Column> = new Array<Column>();

    private administrators: Array<AdministratorModel> = new Array<AdministratorModel>();
    private administratorColumns: Array<Column> = new Array<Column>();

    constructor(private dataService: ApiDataService) {
        
    }
    

    ngOnInit() {
        this.loadStateColumns();
        this.loadCampaignCodeColumns();
        this.loadAdministratorColumns();
        this.loadData();
    }


    private saveState(state: StateModel) {

        this.dataService.updateState(state.Id, state).subscribe(
            data => { // success

                let index = this.states.findIndex(s => s.Id === data.Id);
                if (-1 < index) {
                    this.states.splice(index, 1, data);
                }

            },
            error => { // error
                console.log(error);
            });

    }


    private loadData(): void {


        this.dataService.getStates().subscribe(
            data => { // success
                this.states = data;
            },
            error => { // error
                console.log(error);
            });


        this.dataService.getCampaignCode().subscribe(
            data => { // success
                this.campaignCodes = data;

            },
            error => { // error
                console.log(error);
            });

        this.dataService.getAdmins().subscribe(
            data => { // success
                this.administrators = data;
            },
            error => { // error
                console.log(error);
            });
    }

    private loadStateColumns(): void {
        let c1: Column = new Column();
        c1.field = c1.title = "Id";
        c1.primaryKey = true;
        this.stateColumns.push(c1);

        let c2: Column = new Column();
        c2.field = "StateCode";
        c2.title = "State Code";
        c2.editable = true;
        this.stateColumns.push(c2);

        let c3: Column = new Column();
        c3.field = "StateName";
        c3.title = "State Name";
        c3.editable = true;
        this.stateColumns.push(c3);
    }

    private loadCampaignCodeColumns(): void {
        let c1: Column = new Column();
        c1.field = c1.title = "Id";
        c1.primaryKey = true;
        this.campaignCodeColumns.push(c1);

        let c2: Column = new Column();
        c2.field = "StateCode";
        c2.title = "State Code";
        this.campaignCodeColumns.push(c2);

        let c3: Column = new Column();
        c3.field = "StateName";
        c3.title = "State Name";
        this.campaignCodeColumns.push(c3);
    }

    private loadAdministratorColumns(): void {
        let c1: Column = new Column();
        c1.field = c1.title = "Id";
        c1.primaryKey = true;
        this.administratorColumns.push(c1);

        let c2: Column = new Column();
        c2.field = "StateCode";
        c2.title = "State Code";
        this.administratorColumns.push(c2);

        let c3: Column = new Column();
        c3.field = "StateName";
        c3.title = "State Name";
        this.administratorColumns.push(c3);
    }

}
