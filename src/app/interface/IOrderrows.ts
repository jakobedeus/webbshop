import { IOrders } from './IOrders';

export interface IOrderrows {
    productId: number;
    amount: number;
}

export interface IExtendedOrders {
    order: IOrders;
    movieName: string[];
    movieId: number[];
}