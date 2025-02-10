import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// Add item to cart
router.post("/add", async (req, res) => {
    try {
        const { userId, productId, quantity, name, price } = req.body;
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({
                userId,
                items: [{ productId, quantity, name, price }],
                total: price * quantity
            });
        } else {
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity, name, price });
            }
            cart.total = cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get cart
router.get("/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart || { items: [], total: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
