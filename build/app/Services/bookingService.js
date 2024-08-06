"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bookingService {
    constructor() {
        this.bookings = [];
    }
    addBooking(booking) {
        console.log("Adding booking to the list");
        this.bookings.push(booking);
        console.log("Booking added to the list");
    }
    getBookingById(id) {
        console.log("Getting booking by id");
        return this.bookings.find(booking => booking.id === id);
        console.log("get Booking id function");
    }
    getAllBookings() {
        console.log("Getting all bookings");
        return this.bookings;
        console.log("All bookings found");
    }
    updateBooking(id, updatedBooking) {
        console.log("Updating booking");
        const index = this.bookings.findIndex(booking => booking.id === id);
        if (index !== -1) {
            this.bookings[index] = updatedBooking;
        }
        console.log("Booking updated");
    }
    deleteBooking(id) {
        console.log("Deleting booking");
        const index = this.bookings.findIndex(booking => booking.id === id);
        if (index !== -1) {
            this.bookings.splice(index, 1);
        }
        console.log("Booking deleted");
    }
}
exports.default = bookingService;
