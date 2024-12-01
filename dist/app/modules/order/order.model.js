"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Schema define for Orders
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/.test(value);
            },
            message: '{VALUE} is not a valid email',
        },
        immutable: true,
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity must be positive number'],
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total Price is required'],
        min: [0, 'Total Price must be positive number'],
    },
}, {
    timestamps: true,
    versionKey: false,
});
// Create and export a Order model for Orders
const Order = (0, mongoose_1.model)('Order', orderSchema);
exports.default = Order;
