import { Router } from 'express';
import { orderController } from './order.controller';

// create a router
const orderRouter = Router({
    caseSensitive: true
});

/* all application routes */

// Get total revenue using GET method
orderRouter.get('/revenue', orderController.orderRevenue);

// create a new order using the POST method
orderRouter.post('/', orderController.orderBicycle);

// Get all orders using the GET method
orderRouter.get('/', orderController.getAllOrders);

// Get a specific order by productId using the GET method
orderRouter.get('/:orderId', orderController.getSpecificOrder);

// Update a order by productId using the PUT method
orderRouter.put('/:orderId', orderController.updatedOrder);

// Delete a specific order by productId using the DELETE method
orderRouter.delete('/:orderId', orderController.deletedOrder);



export default orderRouter;
