export default class Hotel {
    id: number;
    name: string;
    rooms: number;
    city: string;
    constructor(id: number, name: string, rooms: number, city: string) {
        this.id = id;
        this.name = name;
        this.rooms = rooms;
        this.city = city;
    }
}