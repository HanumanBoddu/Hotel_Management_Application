"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class clientService {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientById(id) {
        return this.clients.find(client => client.id === id);
    }
    getAllClients() {
        return this.clients;
    }
    updateClient(id, updatedClient) {
        const index = this.clients.findIndex(client => client.id === id);
        if (index !== -1) {
            this.clients[index] = updatedClient;
        }
    }
    deleteClient(id) {
        const index = this.clients.findIndex(client => client.id === id);
        if (index !== -1) {
            this.clients.splice(index, 1);
        }
    }
}
exports.default = clientService;
