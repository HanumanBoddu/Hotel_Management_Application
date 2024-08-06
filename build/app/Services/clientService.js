"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class clientService {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        console.log("Adding client to the list");
        this.clients.push(client);
        console.log("Client added to the list");
    }
    getClientById(id) {
        console.log("Getting client by id");
        return this.clients.find(client => client.id === id);
        console.log("get client id function found");
    }
    getAllClients() {
        console.log("Getting all clients");
        return this.clients;
        console.log("All clients found");
    }
    updateClient(id, updatedClient) {
        console.log("Updating client");
        const index = this.clients.findIndex(client => client.id === id);
        if (index !== -1) {
            this.clients[index] = updatedClient;
        }
        console.log("Client updated");
    }
    deleteClient(id) {
        console.log("Deleting client");
        const index = this.clients.findIndex(client => client.id === id);
        if (index !== -1) {
            this.clients.splice(index, 1);
        }
        console.log("Client deleted");
    }
}
exports.default = clientService;
