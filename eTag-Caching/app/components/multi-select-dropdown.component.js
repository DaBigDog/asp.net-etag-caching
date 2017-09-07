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
var MultiSelectDropDownComponent = MultiSelectDropDownComponent_1 = (function () {
    function MultiSelectDropDownComponent() {
        this.types = new Array();
        this.selectedItems = new Array();
        this.allOption = false;
        this.label = "";
        this.pkField = "";
        this.textField = "";
        this.isReadOnly = false;
        this.onChange = new core_1.EventEmitter();
        this.propagateChange = function (_) { };
    }
    MultiSelectDropDownComponent.prototype.ngOnInit = function () {
    };
    MultiSelectDropDownComponent.prototype.ngOnChanges = function (changes) {
    };
    //**************  Form Control Validation Methods ****************
    // returns null when valid else the validation object 
    // in this case... selectedItems 
    // passed or failed from the onChange method
    MultiSelectDropDownComponent.prototype.validate = function (c) {
        return (!this.selectedItems && 0 < this.selectedItems.length) ? null : {
            multiSelectError: {
                valid: false,
            },
        };
    };
    //**************  ControlValueAccessor Methods ****************
    MultiSelectDropDownComponent.prototype.writeValue = function (value) {
        console.log(value);
    };
    MultiSelectDropDownComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    MultiSelectDropDownComponent.prototype.registerOnTouched = function (fn) { };
    MultiSelectDropDownComponent.prototype.setDisabledState = function (isDisabled) {
    };
    //*************************************************************
    MultiSelectDropDownComponent.prototype.checkChange = function (event, item) {
        var _this = this;
        if (event.target.checked) {
            if (undefined === this.selectedItems) {
                this.selectedItems = new Array();
            }
            if (item[this.pkField] === this.allItem[this.pkField]) {
                // "All" checked
                this.selectedItems = new Array();
                this.selectedItems = this.selectedItems.concat(this.types);
            }
            else {
                this.selectedItems.push(item);
            }
        }
        else {
            if (item[this.pkField] === this.allItem[this.pkField]) {
                // "All" unchecked
                this.selectedItems = new Array();
            }
            else {
                var i = this.selectedItems.findIndex(function (d) { return d[_this.pkField] === item[_this.pkField]; });
                this.selectedItems.splice(i, 1);
            }
        }
        this.propagateChange(this.selectedItems); // must propagate changes to the form!
        this.onChange.emit(this.selectedItems); // notify listeners of change and send new objects
        return false;
    };
    MultiSelectDropDownComponent.prototype.isChecked = function (item) {
        var _this = this;
        var checked = false;
        if (undefined !== this.selectedItems && 0 < this.selectedItems.length) {
            if (item[this.pkField] === this.allItem[this.pkField]) {
                // check "All" if every record is in selected items array...
                checked = this.types.every(function (elem) { return _this.selectedItems.indexOf(elem) > -1; });
            }
            else {
                // check item if in selected items array
                checked = -1 < this.selectedItems.findIndex(function (i) { return i[_this.pkField] === item[_this.pkField]; });
            }
        }
        return checked;
    };
    Object.defineProperty(MultiSelectDropDownComponent.prototype, "selectedItemTextList", {
        get: function () {
            var _this = this;
            var s = "";
            if (undefined !== this.selectedItems && 0 < this.selectedItems.length) {
                // create comma seperated list...
                s = this.selectedItems.map(function (o) { return o[_this.textField]; }).join(', ');
            }
            else {
                // set text
                if (!this.isReadOnly) {
                    s = "Select";
                }
                ;
            }
            return s;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultiSelectDropDownComponent.prototype, "allItem", {
        get: function () {
            var allObj = {};
            allObj[this.textField] = "All";
            allObj[this.pkField] = -999;
            return allObj;
        },
        enumerable: true,
        configurable: true
    });
    return MultiSelectDropDownComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MultiSelectDropDownComponent.prototype, "types", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MultiSelectDropDownComponent.prototype, "selectedItems", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MultiSelectDropDownComponent.prototype, "allOption", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MultiSelectDropDownComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MultiSelectDropDownComponent.prototype, "pkField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MultiSelectDropDownComponent.prototype, "textField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], MultiSelectDropDownComponent.prototype, "isReadOnly", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], MultiSelectDropDownComponent.prototype, "onChange", void 0);
MultiSelectDropDownComponent = MultiSelectDropDownComponent_1 = __decorate([
    core_1.Component({
        selector: 'multi-select-dropdown',
        templateUrl: './app/components/multi-select-dropdown.html',
        styles: ["button.btn-wrap { white-space: normal; }"],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return MultiSelectDropDownComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], MultiSelectDropDownComponent);
exports.MultiSelectDropDownComponent = MultiSelectDropDownComponent;
var MultiSelectDropDownComponent_1;
//# sourceMappingURL=multi-select-dropdown.component.js.map