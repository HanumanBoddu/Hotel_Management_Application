"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    setId(id) { this.id = id; }
    getId() { return this.id; }
    setName(name) { this.name = name; }
    getName() { return this.name; }
    setEmail(email) { this.email = email; }
    getEmail() { return this.email; }
    setPhone(phone) { this.phone = phone; }
    getPhone() { return this.phone; }
}
exports.default = Client;
