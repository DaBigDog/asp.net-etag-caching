

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