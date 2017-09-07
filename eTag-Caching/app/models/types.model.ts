
export class AppDataModel {

    public CampaignCode: CampaignCodeModel;
    public States: StateModel[] = new Array<StateModel>();
    public Admins: AdministratorModel[] = new Array<AdministratorModel>();
    public Address: string = "";
}




export class TypesModel {

    public StatesTypes: StateModel[] = new Array<StateModel>();
    public CampaignCodes: CampaignCodeModel[] = new Array<CampaignCodeModel>();
    public Administrators: AdministratorModel[] = new Array<AdministratorModel>();

}



export class StateModel {
    Id: number = 0;
    StateCode: string;
    StateName: string;
}

export class CampaignCodeModel {
    CampaignCodeId: number;
    CampaignCode: string;
    Active: boolean = false;
}

export class AdministratorModel {
    AdministratorId: number = 0;
    Administrator: string;
    Active: boolean = false;
}