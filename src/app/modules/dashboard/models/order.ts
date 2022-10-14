export interface Order {
    userId:string;
    id?:number;
    date: Date;
    quantity: number;
    totalPrice: number;
}
