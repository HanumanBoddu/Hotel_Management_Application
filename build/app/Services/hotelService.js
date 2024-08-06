"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class hotelService {
    constructor() {
        this.hotels = [];
    }
    addHotel(hotel) {
        console.log("Adding hotel to the list");
        this.hotels.push(hotel);
        console.log("Hotel added to the list");
    }
    getHotelById(id) {
        console.log("Getting hotel by id");
        return this.hotels.find(hotel => hotel.id === id);
        console.log("get Hotel id function");
    }
    getAllHotels() {
        console.log("Getting all hotels");
        return this.hotels;
        console.log("All hotels found");
    }
    updateHotel(id, updatedHotel) {
        console.log("Updating hotel");
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels[index] = updatedHotel;
        }
        console.log("Hotel updated");
    }
    deleteHotel(id) {
        console.log("Deleting hotel");
        const index = this.hotels.findIndex(hotel => hotel.id === id);
        if (index !== -1) {
            this.hotels.splice(index, 1);
        }
        console.log("Hotel deleted");
    }
}
exports.default = hotelService;
