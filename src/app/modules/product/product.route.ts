import { Router } from 'express';
import { productController } from './product.controller';

// create a router
const productRouter = Router({
    caseSensitive: true
});

/* all application routes */

// create a new Bicycle product using the POST method
productRouter.post('/', productController.createBicycle);

// Get all Bicycle products using the GET method
productRouter.get('/', productController.getAllBicycle);

// Get a specific Bicycle product by productId using the GET method
productRouter.get('/:productId', productController.getSpecificBicycle);

// Update Bicycle product by productId using the PUT method
productRouter.put('/:productId', productController.updatedBicycle);

// Delete a specific Bicycle product by productId using the DELETE method
productRouter.delete('/:productId', productController.deletedBicycle);

export default productRouter;
