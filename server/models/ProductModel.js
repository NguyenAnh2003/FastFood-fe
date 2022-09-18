import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    name:{type: String, required: true, unique: true},
    description: {type: String, require: true, unique: true},
    slug:{type: String, required: true, unique: true},
    image: {type: String, required: true},
    price: {type: Number, required: true},
    countInStock: {type: Number, required: true},
    category: { type: String, required: true },
    new: {type: Boolean, default: false, require: true},
  },
  {
    timestamps: true
  }
)

const Product = mongoose.model('Product', productSchema);
export default Product;  
