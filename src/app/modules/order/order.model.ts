import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

// Schema define for Orders
const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
    },
    product: {
      type: Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Create and export a Order model for Orders
const Order = model('Order', orderSchema);
export default Order;
