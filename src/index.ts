import Hotel from "./app/models/Hotel";
import Booking from "./app/models/Booking";
import Client from "./app/models/client";
import HotelService from "./app/Services/hotelService";
import BookingService from "./app/Services/bookingService";
import ClientService from "./app/Services/clientService";

const Kohinoor = new Hotel(1, "Kohinoor", 5, "Hyderabad");
const IndianHotel = new Hotel(2, "IndianHotel", 10, "Bangalore");
const LemonTree = new Hotel(3, "LemonTree", 3, "Mumbai");
const parkHotels=new Hotel(4,"ParkHotels",10,"Delhi");

const hotelService =new HotelService();
const bookingService =new BookingService();
const clientService =new ClientService();

hotelService.addHotel(Kohinoor);
hotelService.addHotel(IndianHotel);
hotelService.addHotel(LemonTree);
hotelService.addHotel(parkHotels);

const Hanuman = new Client(1,"Hanuman","hanuman@gmail.com","7569906878");
const Rohith = new Client(2,"Rohith","rohith@gmail.com","9014575479");
const Ravi = new Client(3,"Ravi","ravi@gmail.com","7894561230");
const Aditya = new Client(4,"Aditya","aditya@gmail.com","7894561230");

clientService.addClient(Hanuman);
clientService.addClient(Rohith);
clientService.addClient(Ravi);
clientService.addClient(Aditya);

function bookHotel(id:number,clientId:number,hotelId:number,roomNumber:number,checkInDate:Date,checkOutDate:Date){
    const hotel = hotelService.getHotelById(hotelId);
    if(hotel===undefined){
        console.log("Hotel not found");
        return ;
    }
    //if rooms are not available in this hotel please check other hotels with available rooms
    if(hotel.rooms===0){
        console.log("No rooms available");
        console.log("Booking failed");
        hotelService.getRemainingHotels().forEach(hotel=>console.log(`Check these Hotels with Available Rooms ${hotel.name}`));
        return ;
    }
    if(hotel.rooms<0){
        console.log("No rooms available");
        console.log("Booking failed");
        return ;
    }

    //To check if the client is already booked in the some hotel in the same date range
    const bookings = bookingService.getAllBookings();
    const isClientAlreadyBooked = bookings.some(booking=>booking.clientId===clientId && booking.checkInDate<=checkOutDate && booking.checkOutDate>=checkInDate);
    if(isClientAlreadyBooked){
        console.log("Client already booked in some hotel in the same date range");
        console.log("Booking failed");
        return ;
    }
    
    const booking = new Booking(id,clientId,hotelId,roomNumber,checkInDate,checkOutDate);
    bookingService.addBooking(booking);
    hotel.rooms=hotel.rooms-roomNumber;
    hotelService.updateHotel(hotelId,hotel);
    console.log("Booking done successfully");
 }
 
bookHotel(4,4,4,1,new Date(2024,8,6),new Date(2024,8,10));
bookHotel(5,4,1,1,new Date(2024,8,8),new Date(2024,8,9));
