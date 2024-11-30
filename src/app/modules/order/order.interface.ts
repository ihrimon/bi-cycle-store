import { ObjectId } from 'mongoose';

// Create an interface for Order
export interface IOrder {
  email: string;
  product?: ObjectId | null;
  quantity: number;
  totalPrice: number;
}
