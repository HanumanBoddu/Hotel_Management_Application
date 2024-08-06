import Hotel from "../models/Hotel";

export default class hotelService{
   public hotels:Hotel[] = [];
   public addHotel(hotel:Hotel):void{
       console.log("Adding hotel to the list");
       this.hotels.push(hotel);
       console.log("Hotel added to the list");
   }
    public getHotelById(id: number): Hotel | undefined {
        console.log("Getting hotel by id");
        return this.hotels.find(hotel => hotel.id === id);
        console.log("get Hotel id function");
    }
    public getAllHotels(): Hotel[] {
        console.log("Getting all hotels");
        return this.hotels;
        console.log("All hotels found");
    }

    public updateHotel(id:number,updatedHotel:Hotel):void{
        console.log("Updating hotel");
        const index=this.hotels.findIndex(hotel=>hotel.id===id);
        if(index!==-1){
            this.hotels[index]=updatedHotel;
        }
        console.log("Hotel updated");
    }

    public deleteHotel(id:number):void{
        console.log("Deleting hotel");
        const index=this.hotels.findIndex(hotel=>hotel.id===id);
        if(index!==-1){
            this.hotels.splice(index,1);
        }
        console.log("Hotel deleted");
    }
}