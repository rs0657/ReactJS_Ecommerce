import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    c: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    cost: { type: Number, required: true },
    Quantity: { type: Number, required: true },
    cate: { type: String, required: true },
    orderQ: { type: Number, default: 0 },
    AddedtoCart: { type: Number, default: 0 }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);
export default Product;
