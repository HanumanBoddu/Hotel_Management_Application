"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hotel {
    constructor(id, name, rooms, city) {
        this.id = id;
        this.name = name;
        this.rooms = rooms;
        this.city = city;
    }
    setId(id) { this.id = id; }
    ;
    getId() { return this.id; }
    ;
    setName(name) { this.name = name; }
    ;
    getName() { return this.name; }
    ;
    setRooms(rooms) { this.rooms = rooms; }
    ;
    getRooms() { return this.rooms; }
    ;
    setCity(city) { this.city = city; }
    ;
    getCity() { return this.city; }
    ;
}
exports.default = Hotel;
