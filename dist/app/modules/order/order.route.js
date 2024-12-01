"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
// create a router
const orderRouter = (0, express_1.Router)({
    caseSensitive: true
});
/* all application routes */
// Get total revenue using GET method
orderRouter.get('/revenue', order_controller_1.orderController.orderRevenue);
// create a new order using the POST method
orderRouter.post('/', order_controller_1.orderController.orderBicycle);
// Get all orders using the GET method
orderRouter.get('/', order_controller_1.orderController.getAllOrders);
// Get a specific order by productId using the GET method
orderRouter.get('/:orderId', order_controller_1.orderController.getSpecificOrder);
// Update a order by productId using the PUT method
orderRouter.put('/:orderId', order_controller_1.orderController.updatedOrder);
// Delete a specific order by productId using the DELETE method
orderRouter.delete('/:orderId', order_controller_1.orderController.deletedOrder);
exports.default = orderRouter;
