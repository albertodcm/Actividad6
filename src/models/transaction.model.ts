export interface Transaction {
    
    id: string;
    customEntries: number;
    items: number;
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
    date: Date;

}