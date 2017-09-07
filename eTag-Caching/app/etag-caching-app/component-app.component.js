"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var types_model_1 = require("../models/types.model");
var CBLAppComponent = (function () {
    function CBLAppComponent(dataService) {
        this.dataService = dataService;
        this.typesModel = new types_model_1.TypesModel();
        this.dataModel = new types_model_1.AppDataModel();
        this.readOnly = false;
        this.myAddressModel = "111 Main Street";
    }
    CBLAppComponent.prototype.ngOnInit = function () {
        this.loadTypesData();
    };
    CBLAppComponent.prototype.loadTypesData = function () {
        var _this = this;
        this.dataService.getStatesTypes().subscribe(function (data) {
            _this.typesModel.StatesTypes = data;
        }, function (error) {
            console.log(error);
        });
        this.dataService.getSubCampaignCodeTypes().subscribe(function (data) {
            _this.typesModel.SubCampaignCodeTypes = data;
            if (undefined === _this.dataModel.SubCampaignCodes) {
                _this.dataModel.SubCampaignCodes = new Array();
            }
            //              this.dataModel.SubCampaignCodes = this.typesModel.SubCampaignCodeTypes.filter(x => x.SubCampaignCodeTypeKey > 1);
        }, function (error) {
            console.log(error);
        });
        this.dataService.getAdminTypes().subscribe(function (data) {
            _this.typesModel.AdminTypes = data;
            _this.dataModel.Admin = _this.typesModel.AdminTypes[0];
            _this.dataModel.Admins = _this.dataModel.Admins.concat(_this.typesModel.AdminTypes);
        }, function (error) {
            console.log(error);
        });
    };
    CBLAppComponent.prototype.changeItem = function (event) {
        console.log(event);
    };
    CBLAppComponent.prototype.logForm = function (value) {
        console.log(value);
    };
    return CBLAppComponent;
}());
CBLAppComponent = __decorate([
    core_1.Component({
        selector: 'component-app',
        templateUrl: '/app/component-app/component-app.html'
    }),
    __metadata("design:paramtypes", [data_service_1.ApiDataService])
], CBLAppComponent);
exports.CBLAppComponent = CBLAppComponent;
//# sourceMappingURL=component-app.component.js.map