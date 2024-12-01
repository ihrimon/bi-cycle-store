"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./app/modules/product/product.route"));
const order_route_1 = __importDefault(require("./app/modules/order/order.route"));
const app = (0, express_1.default)();
// parser for incoming JSON requests
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Define route handlers for product and orders
app.set('case sensitive routing', true);
app.use('/api/products', product_route_1.default);
app.use('/api/orders', order_route_1.default);
// Default route for the application
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Bi-Cycle store web!',
    });
});
exports.default = app;
