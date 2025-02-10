import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    name: String,
    price: Number
  }],
  total: { type: Number, default: 0 }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
