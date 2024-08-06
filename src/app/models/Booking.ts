export default class Booking{
    id:number;
    clientId:number;
    hotelId:number; 
    roomNumber:number;
    checkInDate:Date;
    checkOutDate:Date;
    constructor(id:number, clientId:number, hotelId:number, roomNumber:number, checkInDate:Date, checkOutDate:Date){
        this.id=id;
        this.clientId=clientId;
        this.hotelId=hotelId;
        this.roomNumber=roomNumber;
        this.checkInDate=checkInDate;
        this.checkOutDate=checkOutDate;
    }
}