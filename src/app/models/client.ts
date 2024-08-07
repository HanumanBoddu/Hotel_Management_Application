export default class Client{
    id: number;
    name: string;
    email: string;
    phone: string;
    constructor(id: number, name: string, email: string, phone: string) {
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
    }
    public setId(id:number){this.id=id;}
    public getId(){return this.id;}
    public setName(name:string){this.name=name;}
    public getName(){return this.name;}
    public setEmail(email:string){this.email=email;}    
    public getEmail(){return this.email;}
    public setPhone(phone: string) { this.phone = phone; }
    public getPhone(){return this.phone;}
}