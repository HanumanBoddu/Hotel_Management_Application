import Booking from '../models/Booking';

export default class bookingService{
    public bookings:Booking[] = [];
    public addBooking(booking:Booking):void{
        console.log("Adding booking to the list");
        this.bookings.push(booking);
        console.log("Booking added to the list");
    }
    public getBookingById(id: number): Booking | undefined {
        console.log("Getting booking by id");
        return this.bookings.find(booking => booking.id === id);
        console.log("get Booking id function");
    }
    public getAllBookings(): Booking[] {
        console.log("Getting all bookings");
        return this.bookings;
        console.log("All bookings found");
    }
    public updateBooking(id:number,updatedBooking:Booking):void{
        console.log("Updating booking");
        const index=this.bookings.findIndex(booking=>booking.id===id);
        if(index!==-1){
            this.bookings[index]=updatedBooking;
        }
        console.log("Booking updated");
    }
    public deleteBooking(id:number):void{
        console.log("Deleting booking");
        const index=this.bookings.findIndex(booking=>booking.id===id);
        if(index!==-1){
            this.bookings.splice(index,1);
        }
        console.log("Booking deleted");
    }
}