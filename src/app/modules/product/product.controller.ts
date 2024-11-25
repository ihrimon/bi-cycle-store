import { Request, Response } from 'express';
import { productService } from './product.service';

// Controller for creating a new Bicycle product
const createBicycle = async (req: Request, res: Response) => {
  try {
    // Create a new Bicycle product
    const payload = req.body;
    const result = await productService.createBicycle(payload);
    const { _id, ...rest } = result.toObject();
    const responseData = { _id, ...rest };

    // response from db
    res.status(201).json({
      message: 'Bicycle created successfully',
      success: true,
      data: responseData,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).reduce((acc, key) => {
        acc[key] = error.errors[key];
        return acc;
      }, {});
      return res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: {
          name: error.name,
          errors,
        },
        stack: error.stack,
      });
    }
    res.status(500).json({
      message: 'Something went wrong',
      success: false,
      error: {
        error,
      },
      stack: error.stack,
    });
  }
};

// Controller for get all Bicycle products
const getAllBicycle = async (req: Request, res: Response) => {
  try {
    // get data from db
    const result = await productService.getAllBicycles();

    // response from db
    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      success: true,
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

    // response from db
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      success: true,
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

// Controller for updating Bicycle product
const updatedBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await productService.updatedBicycle(productId, body);

    // response
    res.status(200).json({
      message: 'Bicycle updated successfully',
      success: true,
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

// Controller for deleting Bicycle product
const deletedBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deletedBicycle(productId);

    // response
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const productController = {
  createBicycle,
  getAllBicycle,
  getSpecificBicycle,
  updatedBicycle,
  deletedBicycle,
};
