import { Component, Input, EventEmitter, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseControlValueAccessor } from './base-control-value-accessor'

/********************************************************
 *  Replaces all input controls that need validation.
 ********************************************************/

@Component({
    selector: 'input-control'
    , template: '<div class="form-group">' +
    '<label>{{ label }}</label>'+
    '<input type="text" [(ngModel)]="value" spellcheck="true" placeholder="{{ placeholderText }}" class="form-control" *ngIf="!isReadOnly" (blur)="onTouchedCallback($event)"/> ' +
    '<div class="pre-scrollable scroll-height" [innerHTML]="valueText" *ngIf="isReadOnly"></div>'+
    '</div>'
    , styles: ["div.scroll-height { max-height: 100px !important; overflow-y: scroll;}"]
    , providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputControlComponent),
            multi: true
        }
    ]
})

export class InputControlComponent extends BaseControlValueAccessor  {

    @Input() public innerValue: any;

    @Input() public label: string = "";
    @Input() public placeholderText: string = ""; // text to display

    constructor() {
        super();
    }

    //**************  Form Control Validation Methods ****************

    // returns null when valid else the validation object 
    // in this case... selectedItems 
    // passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.innerValue) ? null : {
            required: {
                valid: false,
            },
        };
    }

    //**************  ControlValueAccessor Methods ****************

    // override base method
    // writes a new value to this element... ngModel value
    public writeValue(value: any) {
        this.innerValue = value;
    }


    //*************************************************************


    public get value(): any {
        return this.innerValue;
    };

    //set accessor triggering onchange callback
    public set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }


    public get valueText(): string {
        let txt: string = "";
        if (undefined !== this.innerValue && null !== this.innerValue) {
            txt = this.innerValue.toString();
        }
        return txt;
    }
}
