import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { 
      type: Number,
      get: v => (v/100).toFixed(3),
      set: v => v*100, 
      required: true 
    },
    countInStock: { type: Number, required: true },
    category: { type: String, required: true },
    new: { type: Boolean, default: false, require: true },
  },
  {
    timestamps: true,
    toJSON: {getters: true}
  },
);

const Product = mongoose.model("Product", productSchema);
export default Product;
