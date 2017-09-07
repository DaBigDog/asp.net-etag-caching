import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
    selector: 'validation-message',
    templateUrl: './app/components/validation-message.html'
})

export class ValidationMessageComponent {


    @Input() public controlName: string;
    @Input() public parentForm: any;
    @Input() public message: string;

    constructor() {

    }

    ngOnInit() {

    }

    private get errorMessage(): string {
        let msg: string = "This is required.";
        if (undefined !== this.message && 0 < this.message.length) {
            msg = this.message + " is required.";
        }
        return msg;
    }

    public get control(): any {
        return this.parentForm.form.controls[this.controlName];
    }

}
