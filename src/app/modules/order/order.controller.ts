import { Request, Response } from 'express';
import { orderService } from './order.service';
import Order from './order.model';

// Controller for create a new Bicycle order
const orderBicycle = async (req: Request, res: Response): Promise<void> => {
  try {
    const payload = req.body;
    const result = await orderService.orderBicycle(payload);

    // Send success response after order creation
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result, 
    });
    console.log('heelo');
  } catch (error) {
    const err = error as Error;
    const errors = {
      name: err.name,
      // errors: err.errors,
      err,
      stack: err.stack,
    };

    // Handle error and send failure response
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: errors,
    });
  }
};

// Controller for get all Orders from the database
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders();

    // Send success response with all orders
    res.status(200).json({
      message: 'Orders retrieved successfully',
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

// Controller for a specific order
const getSpecificOrder = async (req: Request, res: Response) => {
  try {
    // get specific order from db
    const orderId = req.params.orderId;
    const result = await orderService.getSpecificOrder(orderId);

    // Send success response
    res.status(200).json({
      message: 'Order retrieved successfully',
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

// Controller for update an existing order using ID
const updatedOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const body = req.body;
    const result = await orderService.updatedOrder(orderId, body);

    // Send success response after order update
    res.status(200).json({
      // Handle error and send failure response
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

// Controller for deleting an order using ID
const deletedOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    await orderService.deletedOrder(orderId);

    // Send success response after order deletion
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    // Handle error and send failure response
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// Controller for calculate total revenue from all orders
const orderRevenue = async (req: Request, res: Response) => {
  try {
    // calculate total revenue by aggregation
    const result = await Order.aggregate([
      // stage-1: Calculate revenue for each order
      {
        $project: {
          _id: null,
          revenue: { $multiply: ['$totalPrice', '$quantity'] },
        },
      },
      // stage-2: Calculate the sum of all revenues
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$revenue' },
        },
      },
    ]);

    if (result.length > 0) {
      // Send success response with calculated revenue
      res.json({
        message: 'Revenue calculated successfully',
        status: true,
        data: {
          totalRevenue: result[0]?.totalRevenue,
        },
      });
    } else {
      // Send response for no orders exist in order collection
      res.status(404).json({
        message: 'No orders found',
        status: false,
        data: {
          totalRevenue: 0,
        },
      });
    }
  } catch (error) {
    // Handle error and send failure response
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      data: error,
    });
  }
};

// Exporting all order-related controllers
export const orderController = {
  orderBicycle,
  getAllOrders,
  getSpecificOrder,
  updatedOrder,
  deletedOrder,
  orderRevenue,
};
