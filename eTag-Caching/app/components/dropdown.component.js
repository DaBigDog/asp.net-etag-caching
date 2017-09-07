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
var forms_1 = require("@angular/forms");
var DropDownComponent = DropDownComponent_1 = (function () {
    function DropDownComponent() {
        this.types = new Array();
        this.label = "";
        this.pkField = "";
        this.textField = "";
        this.isReadOnly = false;
        this.onChange = new core_1.EventEmitter();
        this.propagateChange = function (_) { };
    }
    DropDownComponent.prototype.ngOnInit = function () {
    };
    DropDownComponent.prototype.ngOnChanges = function (changes) {
    };
    //**************  Form Control Validation Methods ****************
    // returns null when valid else the validation object 
    // in this case... selectedItems 
    // passed or failed from the onChange method
    DropDownComponent.prototype.validate = function (c) {
        return (!this.selectedItem) ? null : {
            dropdownError: {
                valid: false,
            },
        };
    };
    //**************  ControlValueAccessor Methods ****************
    DropDownComponent.prototype.writeValue = function (value) {
        console.log(value);
    };
    DropDownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DropDownComponent.prototype.registerOnTouched = function (fn) { };
    DropDownComponent.prototype.setDisabledState = function (isDisabled) {
    };
    //*************************************************************
    DropDownComponent.prototype.selectItem = function (item) {
        if (!this.isReadOnly) {
            this.selectedItem = item;
            this.propagateChange(item);
            this.onChange.emit(item);
        }
        return false;
    };
    Object.defineProperty(DropDownComponent.prototype, "selectedItemText", {
        get: function () {
            var t = this.isReadOnly ? "" : "Select";
            if (undefined !== this.selectedItem && undefined !== this.textField) {
                var si = this.selectedItem[this.textField];
                if (undefined !== si && null !== si) {
                    t = si;
                }
            }
            return t;
        },
        enumerable: true,
        configurable: true
    });
    return DropDownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DropDownComponent.prototype, "types", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DropDownComponent.prototype, "selectedItem", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DropDownComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DropDownComponent.prototype, "pkField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DropDownComponent.prototype, "textField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], DropDownComponent.prototype, "isReadOnly", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DropDownComponent.prototype, "onChange", void 0);
DropDownComponent = DropDownComponent_1 = __decorate([
    core_1.Component({
        selector: 'drop-down',
        templateUrl: './app/components/dropdown.html',
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return DropDownComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], DropDownComponent);
exports.DropDownComponent = DropDownComponent;
var DropDownComponent_1;
//# sourceMappingURL=dropdown.component.js.map