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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var ApiDataService = (function () {
    function ApiDataService(http) {
        this.http = http;
    }
    ApiDataService.prototype.getStates = function () {
        return this.http.get("api/state")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ApiDataService.prototype.updateState = function (id, state) {
        return this.http.put("api/state/" + id, state)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ApiDataService.prototype.getCampaignCode = function () {
        return this.http.get("api/campaigncode")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ApiDataService.prototype.getAdmins = function () {
        return this.http.get("api/admin")
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    };
    ApiDataService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body;
    };
    ApiDataService.prototype.handleErrorObservable = function (error) {
        console.log(error);
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    return ApiDataService;
}());
ApiDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ApiDataService);
exports.ApiDataService = ApiDataService;
//# sourceMappingURL=data.service.js.map