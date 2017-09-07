import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';

import { ApiDataService } from '../services/data.service'
import { AppDataModel, TypesModel, StateModel, AdministratorModel, CampaignCodeModel } from '../models/types.model';

@Component({
    selector: 'etag-caching-app',
    templateUrl: '/app/etag-caching-app/etag-caching-app.html'
})

export class EtagCachingAppComponent {

    public typesModel: TypesModel = new TypesModel();
    public dataModel: AppDataModel = new AppDataModel();

    constructor(private dataService: ApiDataService) {
        
    }
    

    ngOnInit() {
        this.loadTypesData();

        this.dataModel.Address = "111 Main Street";
    }

    private loadTypesData(): void {


        this.dataService.getStates().subscribe(
            data => { // success
                this.typesModel.StatesTypes = data;
            },
            error => { // error
                console.log(error);
            });


        this.dataService.getCampaignCode().subscribe(
            data => { // success
                this.typesModel.CampaignCodes = data;

                if (undefined === this.dataModel.CampaignCode) {
                    this.dataModel.CampaignCode = new CampaignCodeModel();
                }
            },
            error => { // error
                console.log(error);
            });

        this.dataService.getAdmins().subscribe(
            data => { // success
                this.typesModel.Administrators = data;
                this.dataModel.Admins = this.dataModel.Admins.concat(this.typesModel.Administrators.find(x => x.AdministratorId === 1));
            },
            error => { // error
                console.log(error);
            });
    }



    private changeItem(event: any): void {
        console.log(event);
    }


    private logForm(value: any) {
        console.log(value);
    }
}
