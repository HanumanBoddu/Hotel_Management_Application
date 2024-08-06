"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bookingService {
    constructor() {
        this.bookings = [];
    }
    addBooking(booking) {
        this.bookings.push(booking);
    }
    getBookingById(id) {
        return this.bookings.find(booking => booking.id === id);
    }
    getAllBookings() {
        return this.bookings;
    }
    updateBooking(id, updatedBooking) {
        const index = this.bookings.findIndex(booking => booking.id === id);
        if (index !== -1) {
            this.bookings[index] = updatedBooking;
        }
    }
    deleteBooking(id) {
        const index = this.bookings.findIndex(booking => booking.id === id);
        if (index !== -1) {
            this.bookings.splice(index, 1);
        }
    }
}
exports.default = bookingService;
