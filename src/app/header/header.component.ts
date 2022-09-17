import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { RoomsComponent } from "../rooms/rooms.component";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{

    inforMation: string = '';

    constructor(){}

    @ViewChild(RoomsComponent) room : RoomsComponent

    ngAfterViewInit(): void {
       this.inforMation = this.room.roomToHeader;
       console.log('ngAfter: ',this.room.roomToHeader);
       
    }




}