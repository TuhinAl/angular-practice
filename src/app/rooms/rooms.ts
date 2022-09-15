import { SingleRoom } from "./single-room";

export interface Rooms{
    totalRooms: Array<SingleRoom>;
    bookedRooms: Array<SingleRoom>;
    availableRooms:Array<SingleRoom>;

    getRoomById?(id: string):Rooms;
}