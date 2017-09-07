"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var etag_caching_app_component_1 = require("./etag-caching-app/etag-caching-app.component");
var dropdown_component_1 = require("./components/dropdown.component");
var multi_select_dropdown_component_1 = require("./components/multi-select-dropdown.component");
var input_control_component_1 = require("./components/input-control.component");
var validation_message_component_1 = require("./components/validation-message.component");
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule,
            forms_1.FormsModule
        ],
        declarations: [etag_caching_app_component_1.EtagCachingAppComponent, dropdown_component_1.DropDownComponent, multi_select_dropdown_component_1.MultiSelectDropDownComponent, input_control_component_1.InputControlComponent,
            validation_message_component_1.ValidationMessageComponent],
        providers: [data_service_1.ApiDataService],
        bootstrap: [etag_caching_app_component_1.EtagCachingAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map