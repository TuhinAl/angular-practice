import { Component, Input } from "@angular/core";
import { SingleRoom } from "../single-room";

@Component({
    selector:'app-room-list',
    templateUrl:'./room-list.component.html',
    styleUrls:['./room-list.component.css']
})
export class RoomListComponent{
    @Input() booked : Array<SingleRoom> = [];
    @Input() available : Array<SingleRoom> = [];
    @Input() total : Array<SingleRoom> = [];
    constructor(){}
}