import { Request, Response } from 'express';
import { orderService } from './order.service';
import Order from './order.model';

// order controller
const orderBicycle = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderService.orderBicycle(payload);
    const { _id, ...rest } = result.toObject();
    const responseData = { _id, ...rest };

    // response from db
    res.status(201).json({
      message: 'Order created successfully',
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
const getAllOrders = async (req: Request, res: Response) => {
  try {
    // get data from db
    const result = await orderService.getAllOrders();
    // response
    res.status(200).json({
      message: 'Orders retrieved successfully',
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
const getSpecificOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const result = await orderService.getSpecificOrder(orderId);

    // response
    res.status(200).json({
      message: 'Order retrieved successfully',
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
const updatedOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const body = req.body;
    const result = await orderService.updatedOrder(orderId, body);

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
const deletedOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    await orderService.deletedOrder(orderId);

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

// order revenue controller
const orderRevenue = async (req: Request, res: Response) => {
  try {
    // calculate total revenue by aggregation
    const result = await Order.aggregate([
      {
        $project: {
          totalRevenue: {
            $multiply: ['$quantity', '$totalPrice'],
          },
        },
      },
    ]);

    if (result.length > 0) {
      res.json({
        message: 'Revenue calculated successfully',
        status: true,
        data: {
          totalRevenue: result[0].totalRevenue,
        },
      });
    } else {
      res.json({
        message: 'No orders found',
        status: false,
        data: {
          totalRevenue: 0,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      data: error,
    });
  }
};

export const orderController = {
  orderBicycle,
  getAllOrders,
  getSpecificOrder,
  updatedOrder,
  deletedOrder,
  orderRevenue,
};
