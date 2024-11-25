import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Bicycle name is required'],
      validate: {
        validator: function (value) {
          return typeof value === 'string' && value.length> 0;
        },
        message: '{VALUE} is not valid, Name must be string'
      }
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// Creating a Mongoose model for Bicycle products
const Product = model('Product', productSchema);
export default Product;
