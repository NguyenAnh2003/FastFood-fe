import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    items: [
      {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        price: {
          type: Number,
          get: v => (v / 100).toFixed(3),
          set: v => v * 100,
          required: true
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          require: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
)

const WishList = mongoose.model('Wishlist', wishListSchema)
export default WishList;