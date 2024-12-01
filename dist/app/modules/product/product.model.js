"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema define for the Bicycle products
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Bicycle name is required'],
        validate: {
            validator: function (value) {
                return typeof value === 'string' && value.length > 0;
            },
            message: '{VALUE} is not valid, Name must be string',
        },
    },
    brand: {
        type: String,
        trim: true,
        required: [true, 'Brand name is required'],
    },
    price: {
        type: Number,
        min: [0, 'Price must be a positive number'],
        required: [true, 'Bicycle price is required'],
    },
    type: {
        type: String,
        enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        required: [true, 'Bicycle type is required'],
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'Value should be true or false'],
    },
}, {
    timestamps: true,
    versionKey: false,
});
// Create and export a Product model for Bicycle products
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
