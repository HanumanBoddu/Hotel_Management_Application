"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Booking {
    constructor(id, clientId, hotelId, roomNumber, checkInDate, checkOutDate) {
        this.id = id;
        this.clientId = clientId;
        this.hotelId = hotelId;
        this.roomNumber = roomNumber;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }
}
exports.default = Booking;
