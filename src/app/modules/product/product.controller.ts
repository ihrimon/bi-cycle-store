import { Request, Response } from 'express';
import { productService } from './product.service';

// Controller for creating a new Bicycle product
const createBicycle = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body;
    const result = await productService.createBicycle(payload);

    // Send success response after product creation
    res.status(201).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    const errors = error as Error;

    // Handle error and send failure response
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: {
        name: errors.name,
        errors,
        stack: errors.stack,
      },
    });
  }
};

// Controller for get all Products from the database
const getAllBicycle = async (req: Request, res: Response) => {
  try {
    // get data from db
    const result = await productService.getAllBicycles();

    // response from db
    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// Controller for a specific Bicycle product
const getSpecificBicycle = async (req: Request, res: Response) => {
  try {
    // get specific product from db
    const productId = req.params.productId;
    const result = await productService.getSpecificBicyle(productId);

    // Send success response
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    // Handle error and send failure response
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// Controller for update an existing Product using ID
const updatedBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await productService.updatedBicycle(productId, body);

    // Send success response after order update
    res.status(200).json({
      message: 'Bicycle updated successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    // Handle error and send failure response
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// Controller for deleting Bicycle product using ID
const deletedBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deletedBicycle(productId);

    // Send success response after product deletion
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    // Handle error and send failure response
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// Exporting all product-related controllers
export const productController = {
  createBicycle,
  getAllBicycle,
  getSpecificBicycle,
  updatedBicycle,
  deletedBicycle,
};
