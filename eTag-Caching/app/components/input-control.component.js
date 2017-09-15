"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_control_value_accessor_1 = require("./base-control-value-accessor");
/********************************************************
 *  Replaces all input controls that need validation.
 ********************************************************/
var InputControlComponent = InputControlComponent_1 = (function (_super) {
    __extends(InputControlComponent, _super);
    function InputControlComponent() {
        var _this = _super.call(this) || this;
        _this.label = "";
        _this.placeholderText = ""; // text to display
        return _this;
    }
    //**************  Form Control Validation Methods ****************
    // returns null when valid else the validation object 
    // in this case... selectedItems 
    // passed or failed from the onChange method
    InputControlComponent.prototype.validate = function (c) {
        return (!this.innerValue) ? null : {
            required: {
                valid: false,
            },
        };
    };
    //**************  ControlValueAccessor Methods ****************
    // override base method
    // writes a new value to this element... ngModel value
    InputControlComponent.prototype.writeValue = function (value) {
        this.innerValue = value;
    };
    Object.defineProperty(InputControlComponent.prototype, "value", {
        //*************************************************************
        get: function () {
            return this.innerValue;
        },
        //set accessor triggering onchange callback
        set: function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
                this.onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(InputControlComponent.prototype, "valueText", {
        get: function () {
            var txt = "";
            if (undefined !== this.innerValue && null !== this.innerValue) {
                txt = this.innerValue.toString();
            }
            return txt;
        },
        enumerable: true,
        configurable: true
    });
    return InputControlComponent;
}(base_control_value_accessor_1.BaseControlValueAccessor));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "innerValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputControlComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputControlComponent.prototype, "placeholderText", void 0);
InputControlComponent = InputControlComponent_1 = __decorate([
    core_1.Component({
        selector: 'input-control',
        template: '<div class="form-group">' +
            '<label>{{ label }}</label>' +
            '<input type="text" [(ngModel)]="value" spellcheck="true" placeholder="{{ placeholderText }}" class="form-control" *ngIf="!isReadOnly" (blur)="onTouchedCallback($event)"/> ' +
            '<div class="pre-scrollable scroll-height" [innerHTML]="valueText" *ngIf="isReadOnly"></div>' +
            '</div>',
        styles: ["div.scroll-height { max-height: 100px !important; overflow-y: scroll;}"],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return InputControlComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], InputControlComponent);
exports.InputControlComponent = InputControlComponent;
var InputControlComponent_1;
//# sourceMappingURL=input-control.component.js.map