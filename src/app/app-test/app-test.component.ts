import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-test',
    templateUrl:'./app-test.component.html',
    styleUrls:['./app-test.component.css']
})
export class AppTestComponent implements OnInit{
    constructor(){}
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}