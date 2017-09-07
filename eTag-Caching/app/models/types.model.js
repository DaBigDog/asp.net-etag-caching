"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AppDataModel = (function () {
    function AppDataModel() {
        this.States = new Array();
        this.SubCampaignCodes = new Array();
        this.Admins = new Array();
    }
    return AppDataModel;
}());
exports.AppDataModel = AppDataModel;
var TypesModel = (function () {
    function TypesModel() {
        this.StatesTypes = new Array();
        this.SubCampaignCodeTypes = new Array();
        this.AdminTypes = new Array();
    }
    return TypesModel;
}());
exports.TypesModel = TypesModel;
// Abstract to force inheritance!
var BaseTypeModel = (function () {
    function BaseTypeModel() {
        this.Id = 0;
        this.ActiveFlag = false;
    }
    return BaseTypeModel;
}());
var StateTypeModel = (function () {
    function StateTypeModel() {
        this.Id = 0;
    }
    return StateTypeModel;
}());
exports.StateTypeModel = StateTypeModel;
var SubCampaignCodeTypeModel = (function (_super) {
    __extends(SubCampaignCodeTypeModel, _super);
    function SubCampaignCodeTypeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubCampaignCodeTypeModel;
}(BaseTypeModel));
exports.SubCampaignCodeTypeModel = SubCampaignCodeTypeModel;
var AdminTypeModel = (function () {
    function AdminTypeModel() {
        this.AdminId = 0;
        this.ActiveFlag = false;
    }
    return AdminTypeModel;
}());
exports.AdminTypeModel = AdminTypeModel;
//# sourceMappingURL=types.model.js.map