import Client from "../models/client";

class clientService{
    public clients:Client[] = [];
    public addClient(client:Client):void{
        console.log("Adding client to the list");
        this.clients.push(client);
        console.log("Client added to the list");
    }
    public getClientById(id: number): Client | undefined {
        console.log("Getting client by id");
        return this.clients.find(client => client.id === id);
        console.log("get client id function found");
    }
    public getAllClients(): Client[] {
        console.log("Getting all clients");
        return this.clients;
        console.log("All clients found");
    }
    public updateClient(id:number,updatedClient:Client):void{
        console.log("Updating client");
        const index=this.clients.findIndex(client=>client.id===id);
        if(index!==-1){
            this.clients[index]=updatedClient;
        }
        console.log("Client updated");
    }
    public deleteClient(id:number):void{
        console.log("Deleting client");
        const index=this.clients.findIndex(client=>client.id===id);
        if(index!==-1){
            this.clients.splice(index,1);
        }
        console.log("Client deleted");
    }
}

export default new clientService();