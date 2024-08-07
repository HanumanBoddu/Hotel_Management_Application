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
    public setId(id:number){this.id=id;}
    public getId(){return this.id;}
    public setClientId(clientId:number){this.clientId=clientId;}
    public getClientId(){return this.clientId;}
    public setHotelId(hotelId:number){this.hotelId=hotelId;}
    public getHotelId(){return this.hotelId;}
    public setRoomNumber(roomNumber:number){this.roomNumber=roomNumber;}
    public getRoomNumber(){return this.roomNumber;}
    public setCheckInDate(checkInDate:Date){this.checkInDate=checkInDate;}
    public getCheckInDate(){return this.checkInDate;}
}