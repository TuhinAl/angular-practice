import { Component } from "@angular/core";
import { Rooms } from "./rooms";
import { SingleRoom } from "./single-room";

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
    isToogel: Boolean = false;
    selectedRoom: SingleRoom

    bookedRooms: Array<SingleRoom> = [
        {
            "roomName": "Room-B",
            "roomId": 1003,
            "roomRent": 5300,
            "reserVationDate": new Date('19-08-2022'),
            "discount": 15,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-C",
            "roomId": 1004,
            "roomRent": 4800,
            "reserVationDate": new Date('20-08-2022'),
            "discount": 8,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-D",
            "roomId": 1005,
            "roomRent": 4999,
            "reserVationDate": new Date('21-08-2022'),
            "discount": 9,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-E",
            "roomId": 1006,
            "roomRent": 5199,
            "reserVationDate": new Date('22-08-2022'),
            "discount": 10,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-F",
            "roomId": 1007,
            "roomRent": 5999,
            "reserVationDate": new Date('23-08-2022'),
            "discount": 15,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-G",
            "roomId": 1008,
            "roomRent": 5600,
            "reserVationDate": new Date('24-08-2022'),
            "discount": 14,
            "description": "ac rooms, attach bath"
        }

    ]
    availableRooms: Array<SingleRoom> = [
        {
            "roomName": "Room-A",
            "roomId": 1001,
            "roomRent": 5200,
            "reserVationDate": new Date('17-8-2022'),
            "discount": 12,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-S",
            "roomId": 1002,
            "roomRent": 5000,
            "reserVationDate": new Date('18-08-2022'),
            "discount": 11,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-H",
            "roomId": 1009,
            "roomRent": 4500,
            "reserVationDate": new Date('25-08-2022'),
            "discount": 7,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-I",
            "roomId": 1010,
            "roomRent": 5050,
            "reserVationDate": new Date('26-08-2022'),
            "discount": 6,
            "description": "ac rooms, attach bath"
        }
    ]

    totalRooms: Array<SingleRoom> = [
        {
            "roomName": "Room-A",
            "roomId": 1001,
            "roomRent": 5200,
            "reserVationDate": new Date('17-Nov-2022'),
            "discount": 12,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-S",
            "roomId": 1002,
            "roomRent": 5000,
            "reserVationDate": new Date('18-Nov-2022'),
            "discount": 11,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-B",
            "roomId": 1003,
            "roomRent": 5300,
            "reserVationDate": new Date('19-Nov-2022'),
            "discount": 15,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-C",
            "roomId": 1004,
            "roomRent": 4800,
            "reserVationDate": new Date('20-Nov-2022'),
            "discount": 8,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-D",
            "roomId": 1005,
            "roomRent": 4999,
            "reserVationDate": new Date('21-Nov-2022'),
            "discount": 9,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-E",
            "roomId": 1006,
            "roomRent": 5199,
            "reserVationDate": new Date('22-Nov-2022'),
            "discount": 10,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-F",
            "roomId": 1007,
            "roomRent": 5999,
            "reserVationDate": new Date('23-Nov-2022'),
            "discount": 15,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-G",
            "roomId": 1008,
            "roomRent": 5600,
            "reserVationDate": new Date('24-Nov-2022'),
            "discount": 14,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-H",
            "roomId": 1009,
            "roomRent": 4500,
            "reserVationDate": new Date('25-Nov-2022'),
            "discount": 7,
            "description": "ac rooms, attach bath"
        },
        {
            "roomName": "Room-I",
            "roomId": 1010,
            "roomRent": 5050,
            "reserVationDate": new Date('26-Nov-2022'),
            "discount": 6,
            "description": "ac rooms, attach bath"
        }];

    room: Rooms = {
        totalRooms: this.totalRooms,
        availableRooms: this.availableRooms,
        bookedRooms: this.bookedRooms
    };
    constructor() {

    }

    toggle() {
        this.isToogel = !this.isToogel;
    }

    roomSelected(room: SingleRoom) {
        this.selectedRoom = room
    }
}