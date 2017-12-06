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
var DataGridComponent = (function () {
    function DataGridComponent(dataService) {
        this.dataService = dataService;
        this.columns = new Array();
        this.items = new Array();
        this.onModelChange = new core_1.EventEmitter();
        this.editRowIndex = -1;
    }
    DataGridComponent.prototype.ngOnInit = function () {
        console.log("init");
    };
    DataGridComponent.prototype.edit = function (item, index) {
        this.editRowIndex = index;
        this.editItem = JSON.parse(JSON.stringify(item));
    };
    DataGridComponent.prototype.save = function () {
        this.onModelChange.emit(this.editItem);
        this.cancel();
    };
    DataGridComponent.prototype.cancel = function () {
        this.editRowIndex = -1;
        this.editItem = null;
    };
    return DataGridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataGridComponent.prototype, "columns", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DataGridComponent.prototype, "items", void 0);
__decorate([
    core_1.Output('onModelChange'),
    __metadata("design:type", core_1.EventEmitter)
], DataGridComponent.prototype, "onModelChange", void 0);
DataGridComponent = __decorate([
    core_1.Component({
        selector: 'data-grid',
        templateUrl: '/app/datagrid/datagrid.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.ApiDataService])
], DataGridComponent);
exports.DataGridComponent = DataGridComponent;
//# sourceMappingURL=datagrid.component.js.map