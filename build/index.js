"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hotel_1 = __importDefault(require("./app/models/Hotel"));
const Booking_1 = __importDefault(require("./app/models/Booking"));
const client_1 = __importDefault(require("./app/models/client"));
const hotelService_1 = __importDefault(require("./app/Services/hotelService"));
const bookingService_1 = __importDefault(require("./app/Services/bookingService"));
const clientService_1 = __importDefault(require("./app/Services/clientService"));
const logger_1 = require("./app/Logger/logger");
const Kohinoor = new Hotel_1.default(1, "Kohinoor", 5, "Hyderabad");
const IndianHotel = new Hotel_1.default(2, "IndianHotel", 10, "Bangalore");
const LemonTree = new Hotel_1.default(3, "LemonTree", 3, "Mumbai");
const parkHotels = new Hotel_1.default(4, "ParkHotels", 10, "Delhi");
const hotelService = new hotelService_1.default();
const bookingService = new bookingService_1.default();
const clientService = new clientService_1.default();
hotelService.addHotel(Kohinoor);
hotelService.addHotel(IndianHotel);
hotelService.addHotel(LemonTree);
hotelService.addHotel(parkHotels);
const Hanuman = new client_1.default(1, "Hanuman", "hanuman@gmail.com", "7569906878");
const Rohith = new client_1.default(2, "Rohith", "rohith@gmail.com", "9014575479");
const Ravi = new client_1.default(3, "Ravi", "ravi@gmail.com", "7894561230");
const Aditya = new client_1.default(4, "Aditya", "aditya@gmail.com", "7894561230");
clientService.addClient(Hanuman);
clientService.addClient(Rohith);
clientService.addClient(Ravi);
clientService.addClient(Aditya);
function bookHotel(id, clientId, hotelId, roomNumber, checkInDate, checkOutDate) {
    const hotel = hotelService.getHotelById(hotelId);
    if (hotel === undefined) {
        console.log("Hotel not found");
        logger_1.logger.error("Hotel not found");
        return;
    }
    //if rooms are not available in this hotel please check other hotels with available rooms
    if (hotel.rooms === 0) {
        console.log("No rooms available");
        console.log("Booking failed");
        logger_1.logger.error("No rooms available");
        hotelService.getRemainingHotels().forEach(hotel => console.log(`Check these Hotels with Available Rooms ${hotel.name}`));
        return;
    }
    if (hotel.rooms < 0) {
        console.log("No rooms available");
        console.log("Booking failed");
        logger_1.logger.error("No rooms available");
        return;
    }
    //To check if the client is already booked in the some hotel in the same date range
    const bookings = bookingService.getAllBookings();
    const isClientAlreadyBooked = bookings.some(booking => booking.clientId === clientId && booking.checkInDate <= checkOutDate && booking.checkOutDate >= checkInDate);
    if (isClientAlreadyBooked) {
        console.log("Client already booked in some hotel in the same date range");
        console.log("Booking failed");
        logger_1.logger.error("Client already booked in some hotel in the same date range");
        return;
    }
    const booking = new Booking_1.default(id, clientId, hotelId, roomNumber, checkInDate, checkOutDate);
    bookingService.addBooking(booking);
    hotel.rooms = hotel.rooms - roomNumber;
    hotelService.updateHotel(hotelId, hotel);
    console.log("Booking done successfully");
    logger_1.logger.info("Booking done successfully");
}
bookHotel(1, 1, 1, 1, new Date(2024, 8, 6), new Date(2024, 8, 10));
//bookHotel(4,4,4,1,new Date(2024,8,6),new Date(2024,8,10));
bookHotel(5, 4, 1, 1, new Date(2024, 8, 8), new Date(2024, 8, 9));
