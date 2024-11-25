import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/product/product.route';
import orderRouter from './app/modules/order/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// middleware
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

// application route
app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message: 'Bi-Cycle store web!'
    })
})

export default app;