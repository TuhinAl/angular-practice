import { Component } from "@angular/core";
import { Rooms } from "./rooms";
import { SingleRoom } from "./single-room";

@Component({
    selector:'app-rooms',
    templateUrl:'./rooms.component.html',
    styleUrls:['./rooms.component.css']
})
export class RoomsComponent{
    isToogel : Boolean = false;
    bookedRooms: Array<SingleRoom> = [
     {"roomName":"Room-A", 
    "roomId":1001,
    "roomRent":5200},
    {"roomName":"Room-B", 
    "roomId":1003,
    "roomRent":5300},
    {"roomName":"Room-E", 
    "roomId":1006,
    "roomRent":5199},
    {"roomName":"Room-F", 
    "roomId":1007,
    "roomRent":5999},
    {"roomName":"Room-H", 
    "roomId":1009,
    "roomRent":4500},
    {"roomName":"Room-I", 
    "roomId":1010,
    "roomRent":5050}
    ]
    availableRooms: Array<SingleRoom> = [
    {"roomName":"Room-C", 
    "roomId":1004,
    "roomRent":4800},
    {"roomName":"Room-D", 
    "roomId":1005,
    "roomRent":4999},
    {"roomName":"Room-G", 
    "roomId":1008,
    "roomRent":5600},
    {"roomName":"Room-S", 
    "roomId":1002,
    "roomRent":5000}]

    totalRooms: Array<SingleRoom> = [
    {"roomName":"Room-A", 
    "roomId":1001,
    "roomRent":5200},
    {"roomName":"Room-S", 
    "roomId":1002,
    "roomRent":5000},
    {"roomName":"Room-B", 
    "roomId":1003,
    "roomRent":5300},
    {"roomName":"Room-C", 
    "roomId":1004,
    "roomRent":4800},
    {"roomName":"Room-D", 
    "roomId":1005,
    "roomRent":4999}, 
    {"roomName":"Room-E", 
    "roomId":1006,
    "roomRent":5199},
    {"roomName":"Room-F", 
    "roomId":1007,
    "roomRent":5999},
    {"roomName":"Room-G", 
    "roomId":1008,
    "roomRent":5600},
    {"roomName":"Room-H", 
    "roomId":1009,
    "roomRent":4500},
    {"roomName":"Room-I", 
    "roomId":1010,
    "roomRent":5050}];

    room: Rooms = {
        totalRooms: this.totalRooms,
        availableRooms: this.availableRooms,
        bookedRooms : this.bookedRooms
    };
    constructor(){

    }

    toggle(){
        this.isToogel = !this.isToogel;
    }
}