import Hotel from "./app/models/Hotel";
import Booking from "./app/models/Booking";
import Client from "./app/models/client";
import HotelService from "./app/Services/hotelService";
import BookingService from "./app/Services/bookingService";
import ClientService from "./app/Services/clientService";

const Kohinoor = new Hotel(1, "Kohinoor", 5, "Hyderabad");
const IndianHotel = new Hotel(2, "IndianHotel", 10, "Bangalore");
const LemonTree = new Hotel(3, "LemonTree", 3, "Mumbai");

const hotelService =new HotelService();
const bookingService =new BookingService();
const clientService =new ClientService();

hotelService.addHotel(Kohinoor);
hotelService.addHotel(IndianHotel);
hotelService.addHotel(LemonTree);

const Hanuman = new Client(1,"Hanuman","hanuman@gmail.com","7569906878");
const Rohith = new Client(2,"Rohith","rohith@gmail.com","9014575479");
const Ravi = new Client(3,"Ravi","ravi@gmail.com","7894561230");

clientService.addClient(Hanuman);
clientService.addClient(Rohith);
clientService.addClient(Ravi);

function bookHotel(id:number,clientId:number,hotelId:number,roomNumber:number,checkInDate:Date,checkOutDate:Date){
   const booking = new Booking(id,clientId,hotelId,roomNumber,checkInDate,checkOutDate);
   bookingService.addBooking(booking);
   console.log("Booking done successfully");
}

bookHotel(1,1,1,1,new Date(2024,8,6),new Date(2024,8,10));
bookHotel(2,2,3,3,new Date(2024,8,6),new Date(2024,8,10));
bookHotel(3,3,3,1,new Date(2024,8,6),new Date(2024,8,10));

console.log(bookingService.getAllBookings());