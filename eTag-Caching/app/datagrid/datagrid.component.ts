import { Component, Input, Output, EventEmitter } from '@angular/core';


import { ApiDataService } from '../services/data.service'
import { StateModel, AdministratorModel, CampaignCodeModel } from '../models/data.model';

import { Column } from '../models/column';

@Component({
    selector: 'data-grid',
    templateUrl: '/app/datagrid/datagrid.component.html'
})

export class DataGridComponent {

    @Input() private columns: Array<Column> = new Array<Column>(); 
    @Input() private items: Array<any> = new Array<any>(); 

    @Output('onModelChange') private onModelChange: EventEmitter<any> = new EventEmitter<any>();

    private editItem: any;

    private editRowIndex: number = -1;

    constructor(private dataService: ApiDataService) {

    }


    ngOnInit() {
        console.log("init");
    }

    private edit(item: any, index: number) {
        this.editRowIndex = index;
        this.editItem = JSON.parse(JSON.stringify(item));
    }

    private save() {
        this.onModelChange.emit(this.editItem);
        this.cancel();
    }

    private cancel(): void {
        this.editRowIndex = -1;
        this.editItem = null;
    }

}
