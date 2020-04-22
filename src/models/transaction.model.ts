import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Transaction {

    id: string;
    customEntries: object[];
    items: {};
    totalQuantity: number;
    subtotal: number;
    tax: number;
    tips: number;
    total: number;
    date: Timestamp<any>;

}
