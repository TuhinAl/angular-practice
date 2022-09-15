import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { SingleRoom } from "../single-room";

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit, OnChanges{
    @Input() booked: Array<SingleRoom> = [];
    @Input() available: Array<SingleRoom> = [];
    @Input() total: Array<SingleRoom> = [];
    @Output() selectedRoom = new EventEmitter<SingleRoom>();
    @Input() title:string = '';
    constructor() { }

    ngOnInit(): void {
       
    }
    ngOnChanges(changes: SimpleChanges): void {
       console.log('changes: ', changes);
       if(changes['title']){
        this.title = changes['title'].currentValue.toUpperCase();
       }
       
    }

    selectRoom(room: SingleRoom) {
        this.selectedRoom.emit(room)
    }
}