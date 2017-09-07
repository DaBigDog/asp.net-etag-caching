"use strict";
var AppDataModel = (function () {
    function AppDataModel() {
        this.States = new Array();
        this.Admins = new Array();
        this.Address = "";
    }
    return AppDataModel;
}());
exports.AppDataModel = AppDataModel;
var TypesModel = (function () {
    function TypesModel() {
        this.StatesTypes = new Array();
        this.CampaignCodes = new Array();
        this.Administrators = new Array();
    }
    return TypesModel;
}());
exports.TypesModel = TypesModel;
var StateModel = (function () {
    function StateModel() {
        this.Id = 0;
    }
    return StateModel;
}());
exports.StateModel = StateModel;
var CampaignCodeModel = (function () {
    function CampaignCodeModel() {
        this.Active = false;
    }
    return CampaignCodeModel;
}());
exports.CampaignCodeModel = CampaignCodeModel;
var AdministratorModel = (function () {
    function AdministratorModel() {
        this.AdministratorId = 0;
        this.Active = false;
    }
    return AdministratorModel;
}());
exports.AdministratorModel = AdministratorModel;
//# sourceMappingURL=types.model.js.map