import { Router } from 'express';
import { orderController } from './order.controller';

// create a router
const orderRouter = Router();

/* all application routes */

// create a new order by the POST method
orderRouter.post('/', orderController.orderBicycle);

// Get all orders by the GET method
orderRouter.get('/', orderController.getAllOrders);

// Get a specific order by productId by the GET method
orderRouter.get('/:orderId', orderController.getSpecificOrder);

// Update order by productId by the PUT method
orderRouter.put('/:orderId', orderController.updatedOrder);

// Delete a specific order by productId by the DELETE method
orderRouter.delete('/:orderId', orderController.deletedOrder);

// Get total revenue by GET method
orderRouter.get('/revenue', orderController.orderRevenue);

export default orderRouter;
