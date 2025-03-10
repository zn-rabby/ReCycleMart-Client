// export interface ITransactions {

import { IProduct } from "./product";

    
//     transactionId?: string;
//     buyerID?: string;    
//     sellerID?: string;   
//     itemID: string;    
//     status: 'pending' | 'completed'; 
//     createdAt?: string;
//     updatedAt?: string;
//   }

 

  type TBuyerId = {
    _id: string;
    name: string;
    identifier: string;
    role: string;
}

type TSellerId = Pick<TBuyerId, keyof TBuyerId>;

export type ITransactions = {
    _id: string;
    buyerID: TBuyerId;
    sellerID: TSellerId;
    itemID: IProduct;
    status?: 'pending' | 'completed';
    paymentMethod?: 'online';
    transactionId?: string;
    createdAt: string;
    updatedAt: string;
};