import Client from "../models/client";

export default class clientService{
    public clients:Client[] = [];
    public addClient(client:Client):void{
        this.clients.push(client);
    }
    public getClientById(id: number): Client | undefined {
        return this.clients.find(client => client.id === id);
    }
    public getAllClients(): Client[] {
        return this.clients;
    }
    public updateClient(id:number,updatedClient:Client):void{
        const index=this.clients.findIndex(client=>client.id===id);
        if(index!==-1){
            this.clients[index]=updatedClient;
        }
    }
    public deleteClient(id:number):void{
        const index=this.clients.findIndex(client=>client.id===id);
        if(index!==-1){
            this.clients.splice(index,1);
        }
    }
}
