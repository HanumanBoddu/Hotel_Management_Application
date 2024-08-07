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
    setId(id) { this.id = id; }
    getId() { return this.id; }
    setClientId(clientId) { this.clientId = clientId; }
    getClientId() { return this.clientId; }
    setHotelId(hotelId) { this.hotelId = hotelId; }
    getHotelId() { return this.hotelId; }
    setRoomNumber(roomNumber) { this.roomNumber = roomNumber; }
    getRoomNumber() { return this.roomNumber; }
    setCheckInDate(checkInDate) { this.checkInDate = checkInDate; }
    getCheckInDate() { return this.checkInDate; }
}
exports.default = Booking;
