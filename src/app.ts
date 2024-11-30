import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/product/product.route';
import orderRouter from './app/modules/order/order.route';
const app: Application = express();

// parser for incoming JSON requests
app.use(express.json());
app.use(cors());

// Define route handlers for product and orders
app.set('case sensitive routing', true);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// Default route for the application
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Bi-Cycle store web!',
  });
});

export default app;
