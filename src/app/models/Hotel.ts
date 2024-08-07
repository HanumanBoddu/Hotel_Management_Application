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
    public setId(id: number) {this.id = id;};
    public getId() {return this.id;};
    public setName(name: string) {this.name = name;};
    public getName() {return this.name;};
    public setRooms(rooms: number) {this.rooms = rooms;};
    public getRooms() {return this.rooms;};
    public setCity(city: string) {this.city = city;};
    public getCity() {return this.city;};
}