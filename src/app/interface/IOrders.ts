export interface IOrders {
    companyId: number;
    created: string;
    createdBy: string;
    totalPrice: number;
    orderRows: any[];  
    status: boolean;
    paymentMethod: string;
}