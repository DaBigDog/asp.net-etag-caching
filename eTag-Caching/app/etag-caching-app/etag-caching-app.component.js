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
var EtagCachingAppComponent = (function () {
    function EtagCachingAppComponent(dataService) {
        this.dataService = dataService;
        this.typesModel = new types_model_1.TypesModel();
        this.dataModel = new types_model_1.AppDataModel();
    }
    EtagCachingAppComponent.prototype.ngOnInit = function () {
        this.loadTypesData();
        this.dataModel.Address = "111 Main Street";
    };
    EtagCachingAppComponent.prototype.loadTypesData = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (data) {
            _this.typesModel.StatesTypes = data;
        }, function (error) {
            console.log(error);
        });
        this.dataService.getCampaignCode().subscribe(function (data) {
            _this.typesModel.CampaignCodes = data;
            if (undefined === _this.dataModel.CampaignCode) {
                _this.dataModel.CampaignCode = new types_model_1.CampaignCodeModel();
            }
        }, function (error) {
            console.log(error);
        });
        this.dataService.getAdmins().subscribe(function (data) {
            _this.typesModel.Administrators = data;
            _this.dataModel.Admins = _this.dataModel.Admins.concat(_this.typesModel.Administrators.find(function (x) { return x.AdministratorId === 1; }));
        }, function (error) {
            console.log(error);
        });
    };
    EtagCachingAppComponent.prototype.changeItem = function (event) {
        console.log(event);
    };
    EtagCachingAppComponent.prototype.logForm = function (value) {
        console.log(value);
    };
    return EtagCachingAppComponent;
}());
EtagCachingAppComponent = __decorate([
    core_1.Component({
        selector: 'etag-caching-app',
        templateUrl: '/app/etag-caching-app/etag-caching-app.html'
    }),
    __metadata("design:paramtypes", [data_service_1.ApiDataService])
], EtagCachingAppComponent);
exports.EtagCachingAppComponent = EtagCachingAppComponent;
//# sourceMappingURL=etag-caching-app.component.js.map