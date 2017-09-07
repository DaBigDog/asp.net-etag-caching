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
var ValidationMessageComponent = (function () {
    function ValidationMessageComponent() {
    }
    ValidationMessageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ValidationMessageComponent.prototype, "errorMessage", {
        get: function () {
            var msg = "This is required.";
            if (undefined !== this.message && 0 < this.message.length) {
                msg = this.message + " is required.";
            }
            return msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationMessageComponent.prototype, "control", {
        get: function () {
            return this.parentForm.form.controls[this.controlName];
        },
        enumerable: true,
        configurable: true
    });
    return ValidationMessageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ValidationMessageComponent.prototype, "controlName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ValidationMessageComponent.prototype, "parentForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ValidationMessageComponent.prototype, "message", void 0);
ValidationMessageComponent = __decorate([
    core_1.Component({
        selector: 'validation-message',
        templateUrl: './app/components/validation-message.html'
    }),
    __metadata("design:paramtypes", [])
], ValidationMessageComponent);
exports.ValidationMessageComponent = ValidationMessageComponent;
//# sourceMappingURL=validation-message.component.js.map