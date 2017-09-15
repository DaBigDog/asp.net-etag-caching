import { Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseControlValueAccessor implements ControlValueAccessor { 

    @Input() public isReadOnly: boolean = false; // disabled or readonly mode
    @Output() public onChange: EventEmitter<any> = new EventEmitter<any>(); // listeners notified of value change

    //**************  ControlValueAccessor Methods ****************

    public writeValue(value: any) {
        console.log(value);
    }

    public onChangeCallback = (_: any) => { };

    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }


    public onTouchedCallback = (_: any) => { };

    public registerOnTouched(fn: any) { 
        this.onTouchedCallback = fn;
    }



    public setDisabledState(isDisabled?: boolean): void {

    }

}