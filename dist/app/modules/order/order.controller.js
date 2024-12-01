"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_model_1 = __importDefault(require("./order.model"));
// Controller for create a new Bicycle order
const orderBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield order_service_1.orderService.orderBicycle(payload);
        // Send success response after order creation
        res.status(201).json({
            message: 'Order created successfully',
            status: true,
            data: result,
        });
        console.log('heelo');
    }
    catch (error) {
        const errors = error;
        // Handle error and send failure response
        res.status(500).json({
            message: 'Validation failed',
            success: false,
            error: {
                name: errors.name,
                errors,
                stack: errors.stack,
            },
        });
    }
});
// Controller for get all Orders from the database
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.orderService.getAllOrders();
        // Send success response with all orders
        res.status(200).json({
            message: 'Orders retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        // Handle error and send failure response
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// Controller for a specific order
const getSpecificOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get specific order from db
        const orderId = req.params.orderId;
        const result = yield order_service_1.orderService.getSpecificOrder(orderId);
        // Send success response
        res.status(200).json({
            message: 'Order retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        // Handle error and send failure response
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// Controller for update an existing order using ID
const updatedOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.orderId;
        const body = req.body;
        const result = yield order_service_1.orderService.updatedOrder(orderId, body);
        // Send success response after order update
        res.status(200).json({
            // Handle error and send failure response
            message: 'Bicycle updated successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        // Handle error and send failure response
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// Controller for deleting an order using ID
const deletedOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.orderId;
        yield order_service_1.orderService.deletedOrder(orderId);
        // Send success response after order deletion
        res.status(200).json({
            message: 'Bicycle deleted successfully',
            status: true,
            data: {},
        });
    }
    catch (error) {
        // Handle error and send failure response
        res.status(500).json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// Controller for calculate total revenue from all orders
const orderRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // calculate total revenue by aggregation
        const result = yield order_model_1.default.aggregate([
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
                    totalRevenue: (_a = result[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue,
                },
            });
        }
        else {
            // Send response for no orders exist in order collection
            res.status(404).json({
                message: 'No orders found',
                status: false,
                data: {
                    totalRevenue: 0,
                },
            });
        }
    }
    catch (error) {
        // Handle error and send failure response
        res.status(500).json({
            message: 'Something went wrong',
            status: false,
            data: error,
        });
    }
});
// Exporting all order-related controllers
exports.orderController = {
    orderBicycle,
    getAllOrders,
    getSpecificOrder,
    updatedOrder,
    deletedOrder,
    orderRevenue,
};
