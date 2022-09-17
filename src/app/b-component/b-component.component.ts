import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'b-component',
    templateUrl: './b-component.component.html',
    styleUrls: ['./b-component.component.css']
})
export class BComponent implements OnChanges {
    @Input() book : any;
    
    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("The book property changed")
    }
}
