import { IOrder } from './order.interface';
import Order from './order.model';

// Create a new Order for Bicycle
const orderBicycle = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload);
  return result;
};

// Get all Orders
const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

// Get a specific order by ID
const getSpecificOrder = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

// Update a order by ID with new data
const updatedOrder = async (id: string, data: IOrder) => {
  const result = await Order.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// Delete a order by ID
const deletedOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const orderService = {
  orderBicycle,
  getAllOrders,
  getSpecificOrder,
  updatedOrder,
  deletedOrder,
};
