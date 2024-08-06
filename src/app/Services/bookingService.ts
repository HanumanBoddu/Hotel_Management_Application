import Booking from '../models/Booking';

export default class bookingService{
    public bookings:Booking[] = [];
    public addBooking(booking:Booking):void{
        this.bookings.push(booking);
    }
    public getBookingById(id: number): Booking | undefined {
        return this.bookings.find(booking => booking.id === id);
    }
    public getAllBookings(): Booking[] {
        return this.bookings;
    }
    public updateBooking(id:number,updatedBooking:Booking):void{
        const index=this.bookings.findIndex(booking=>booking.id===id);
        if(index!==-1){
            this.bookings[index]=updatedBooking;
        }
    }
    public deleteBooking(id:number):void{
        const index=this.bookings.findIndex(booking=>booking.id===id);
        if(index!==-1){
            this.bookings.splice(index,1);
        }
    }
}