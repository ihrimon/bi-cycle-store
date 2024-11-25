import { ObjectId } from 'mongoose';

export interface IOrder {
  email: string;
  product?: ObjectId | null;
  quantity: number;
  totalPrice: number;
}
