"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
// create a router
const productRouter = (0, express_1.Router)({
    caseSensitive: true
});
/* all application routes */
// create a new Bicycle product using the POST method
productRouter.post('/', product_controller_1.productController.createBicycle);
// Get all Bicycle products using the GET method
productRouter.get('/', product_controller_1.productController.getAllBicycle);
// Get a specific Bicycle product by productId using the GET method
productRouter.get('/:productId', product_controller_1.productController.getSpecificBicycle);
// Update Bicycle product by productId using the PUT method
productRouter.put('/:productId', product_controller_1.productController.updatedBicycle);
// Delete a specific Bicycle product by productId using the DELETE method
productRouter.delete('/:productId', product_controller_1.productController.deletedBicycle);
exports.default = productRouter;
