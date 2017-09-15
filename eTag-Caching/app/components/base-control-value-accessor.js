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
var BaseControlValueAccessor = (function () {
    function BaseControlValueAccessor() {
        this.isReadOnly = false; // disabled or readonly mode
        this.onChange = new core_1.EventEmitter(); // listeners notified of value change
        this.onChangeCallback = function (_) { };
        this.onTouchedCallback = function (_) { };
    }
    //**************  ControlValueAccessor Methods ****************
    BaseControlValueAccessor.prototype.writeValue = function (value) {
        console.log(value);
    };
    BaseControlValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    BaseControlValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    BaseControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
    };
    return BaseControlValueAccessor;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BaseControlValueAccessor.prototype, "isReadOnly", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BaseControlValueAccessor.prototype, "onChange", void 0);
exports.BaseControlValueAccessor = BaseControlValueAccessor;
//# sourceMappingURL=base-control-value-accessor.js.map