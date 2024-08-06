"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class hotelService {
    constructor() {
        this.hotels = [];
    }
    addHotel(hotel) {
        this.hotels.push(hotel);
    }
    getHotelById(id) {
        return this.hotels.find(hotel => hotel.id === id);
    }
    getAllHotels() {
        return this.hotels;
    }
    updateHotel(id, updatedHotel) {
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels[index] = updatedHotel;
        }
    }
    deleteHotel(id) {
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels.splice(index, 1);
        }
    }
    getRemainingHotels() {
        return this.hotels.filter(hotel => hotel.rooms > 0);
    }
}
exports.default = hotelService;
