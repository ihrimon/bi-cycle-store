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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
// Controller for creating a new Bicycle product
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield product_service_1.productService.createBicycle(payload);
        // Send success response after product creation
        res.status(201).json({
            message: 'Bicycle created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        const err = error;
        const errors = {
            name: err.name,
            // errors: err.errors,
            err,
            stack: err.stack,
        };
        // Handle error and send failure response
        res.status(500).json({
            message: 'Validation failed',
            success: false,
            error: errors,
        });
    }
});
// Controller for get all Products from the database
const getAllBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get data from db
        const result = yield product_service_1.productService.getAllBicycles();
        // response from db
        res.status(200).json({
            message: 'Bicycles retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// Controller for a specific Bicycle product
const getSpecificBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get specific product from db
        const productId = req.params.productId;
        const result = yield product_service_1.productService.getSpecificBicyle(productId);
        // Send success response
        res.status(200).json({
            message: 'Bicycle retrieved successfully',
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
// Controller for update an existing Product using ID
const updatedBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const body = req.body;
        const result = yield product_service_1.productService.updatedBicycle(productId, body);
        // Send success response after order update
        res.status(200).json({
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
// Controller for deleting Bicycle product using ID
const deletedBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        yield product_service_1.productService.deletedBicycle(productId);
        // Send success response after product deletion
        res.status(200).json({
            message: 'Bicycle deleted successfully',
            status: true,
            data: {},
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
// Exporting all product-related controllers
exports.productController = {
    createBicycle,
    getAllBicycle,
    getSpecificBicycle,
    updatedBicycle,
    deletedBicycle,
};
