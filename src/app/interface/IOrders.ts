export interface IOrders {
    id: number;
    companyId: number;
    created: string;
    createdBy: string;
    totalPrice: number;
    orderRows: any[];  
    status: boolean;
    paymentMethod: string;
}