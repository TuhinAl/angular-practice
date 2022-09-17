import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";
import { Hero } from "./hero";

@Component({
    selector: 'app-on-change',
    templateUrl: './on-change.component.html',
    styleUrls: ['./on-change.component.css']
})
export class OnChangeComponent implements OnChanges {
    @Input() hero : Hero;
    @Input() power = '';
    changeLog: string[] = [];

    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes);
        
        for (const propName in changes) {
            const chng = changes[propName];
            const cur  = JSON.stringify(chng.currentValue);
            const prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
          }
 
}
reset() { this.changeLog = []; }
}