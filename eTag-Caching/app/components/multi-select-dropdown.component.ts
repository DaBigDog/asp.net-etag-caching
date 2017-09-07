import { Component, Input, Output, EventEmitter, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';



@Component({
    selector: 'multi-select-dropdown',
    templateUrl: './app/components/multi-select-dropdown.html',
    styles: ["button.btn-wrap { white-space: normal; }"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiSelectDropDownComponent),
            multi: true
        }
    ]
})

export class MultiSelectDropDownComponent implements ControlValueAccessor {

    @Input() public types: any[] = new Array<any>();
    @Input() public selectedItems: any[] = new Array<any>();
    @Input() public allOption: boolean = false;
    @Input() public label: string = "";
    @Input() public pkField: string = "";
    @Input() public textField: string = "";
    @Input() public isReadOnly: boolean = false;


    @Output() public onChange: EventEmitter<any> = new EventEmitter<any>();


    constructor() {

    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {

    }

    //**************  Form Control Validation Methods ****************

    // returns null when valid else the validation object 
    // in this case... selectedItems 
    // passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.selectedItems && 0 < this.selectedItems.length) ? null : {
            multiSelectError: {
                valid: false,
            },
        };
    }

    //**************  ControlValueAccessor Methods ****************

    public writeValue(value: any) {
        console.log(value);
    }

    public propagateChange = (_: any) => { };

    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any) { }

    public setDisabledState(isDisabled?: boolean): void {

    }

    //*************************************************************


    private checkChange(event: any, item: any): boolean {

        if (event.target.checked) {
            if (undefined === this.selectedItems) {
                this.selectedItems = new Array<any>();
            }

            if (item[this.pkField] === this.allItem[this.pkField]) {
                // "All" checked
                this.selectedItems = new Array<any>();
                this.selectedItems = this.selectedItems.concat(this.types);
            } else {

                this.selectedItems.push(item);
            }

        } else {

            if (item[this.pkField] === this.allItem[this.pkField]) {
                // "All" unchecked
                this.selectedItems = new Array<any>();
            } else {
                let i: number = this.selectedItems.findIndex(d => d[this.pkField] === item[this.pkField]);
                this.selectedItems.splice(i, 1);
            }
        }
        this.propagateChange(this.selectedItems); // must propagate changes to the form!
        this.onChange.emit(this.selectedItems); // notify listeners of change and send new objects

        return false;
    }


    private isChecked(item: any): boolean {
        let checked: boolean = false;
        if (undefined !== this.selectedItems && 0 < this.selectedItems.length) {
            if (item[this.pkField] === this.allItem[this.pkField]) {
                // check "All" if every record is in selected items array...
                checked = this.types.every(elem => this.selectedItems.indexOf(elem) > -1);
            } else {
                // check item if in selected items array
                checked = -1 < this.selectedItems.findIndex(i => i[this.pkField] === item[this.pkField]);
            }
        }
        return checked;
    }


    private get selectedItemTextList(): string {
        let s: string = "";
        if (undefined !== this.selectedItems && 0 < this.selectedItems.length) {
            // create comma seperated list...
            s = this.selectedItems.map(o => o[this.textField]).join(', ');
        } else {
            // set text
            if (!this.isReadOnly) { s = "Select" };
        }
        return s;
    }

    private get allItem(): any {
        let allObj: any = {};
        allObj[this.textField] = "All";
        allObj[this.pkField] = -999;

        return allObj;
    }



}
