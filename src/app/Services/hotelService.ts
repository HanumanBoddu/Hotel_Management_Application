import Hotel from "../models/Hotel";

export default class hotelService{
   public hotels:Hotel[] = [];
   public addHotel(hotel:Hotel):void{
       this.hotels.push(hotel);
   }
    public getHotelById(id: number): Hotel | undefined {
        return this.hotels.find(hotel => hotel.id === id);
    }
    public getAllHotels(): Hotel[] {
        return this.hotels;
    }

    public updateHotel(id:number,updatedHotel:Hotel):void{
        const index=this.hotels.findIndex(hotel=>hotel.id===id);
        if(index!==-1){
            this.hotels[index]=updatedHotel;
        }
    }

    public deleteHotel(id:number):void{
        const index=this.hotels.findIndex(hotel=>hotel.id===id);
        if(index!==-1){
            this.hotels.splice(index,1);
        }
    }

    public getRemainingHotels():Hotel[]{
        return this.hotels.filter(hotel=>hotel.rooms>0);
    }
}