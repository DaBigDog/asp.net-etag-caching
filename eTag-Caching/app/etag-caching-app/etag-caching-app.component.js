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
var column_1 = require("../models/column");
var EtagCachingAppComponent = (function () {
    function EtagCachingAppComponent(dataService) {
        this.dataService = dataService;
        this.states = new Array();
        this.stateColumns = new Array();
    }
    EtagCachingAppComponent.prototype.ngOnInit = function () {
        this.loadStateColumns();
        this.loadStateData();
    };
    EtagCachingAppComponent.prototype.saveState = function (state) {
        var _this = this;
        this.dataService.updateState(state.Id, state).subscribe(function (data) {
            var index = _this.states.findIndex(function (s) { return s.Id === state.Id; });
            if (-1 < index) {
                _this.states.splice(index, 1, state);
            }
            // now we'll reload the states to prove the eTag has changed!
            _this.loadStateData();
        }, function (error) {
            console.log(error);
        });
    };
    EtagCachingAppComponent.prototype.loadStateData = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (data) {
            _this.states = data;
        }, function (error) {
            console.log(error);
        });
    };
    EtagCachingAppComponent.prototype.loadStateColumns = function () {
        var c1 = new column_1.Column();
        c1.field = c1.title = "Id";
        c1.primaryKey = true;
        this.stateColumns.push(c1);
        var c2 = new column_1.Column();
        c2.field = "StateCode";
        c2.title = "State Code";
        c2.editable = true;
        this.stateColumns.push(c2);
        var c3 = new column_1.Column();
        c3.field = "StateName";
        c3.title = "State Name";
        c3.editable = true;
        this.stateColumns.push(c3);
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