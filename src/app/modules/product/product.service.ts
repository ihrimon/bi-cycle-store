import { IProduct } from './product.interface';
import Product from './product.model';

// Create a new Bicycle product
const createBicycle = async (payload: IProduct): Promise<IProduct> => {
  const result = await await Product.create(payload);
  return result;
};

// Get all Bicycle products
const getAllBicycles = async () => {
  const result = await Product.find();
  return result;
};

// Get a specific Bicycle product by ID
const getSpecificBicyle = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// Update a Bicycle product by ID with new data
const updatedBicycle = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// Delete a Bicycle product by ID
const deletedBicycle = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createBicycle,
  getAllBicycles,
  getSpecificBicyle,
  updatedBicycle,
  deletedBicycle,
};
