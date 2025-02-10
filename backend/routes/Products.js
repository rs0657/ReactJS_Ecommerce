import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).json({ message: "No products found" });
        }
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ 
            message: "Error fetching products", 
            error: error.message 
        });
    }
});

// Add a new product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// Initialize products if none exist
router.get("/init", async (req, res) => {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            const defaultProducts = [
                {
                    c: 'prod-1',
                    img: 'https://www.bigbasket.com/media/uploads/p/l/40312601_2-fresho-tomato-local.jpg',
                    desc: "Tomato - Local",
                    cost: 10,
                    Quantity: 0.25,
                    cate: 'veggies',
                    orderQ: 0,
                    AddedtoCart: 0
                },
                {
                    c: 'prod-2',
                    img: 'https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg',
                    desc: " Onion (Loose)",
                    cost: 175,
                    Quantity: 0.25,
                    cate: 'veggies',
                    orderQ: 0,
                    AddedtoCart: 0
                },
                {
                    c: 'prod-3',
                    img: "https://www.bigbasket.com/media/uploads/p/l/10000159_27-fresho-potato.jpg",
                    desc: "Potato",
                    cost: 37,
                    Quantity: 0.25,
                    cate: 'veggies',
                    orderQ: 0,
                    AddedtoCart: 0
                },
                {
                    c: 'prod-4',
                    img: 'https://www.bigbasket.com/media/uploads/p/l/40134281_14-fresho-baby-apple-shimla.jpg',
                    desc: " Baby Apple Shimla",
                    cost: 193,
                    Quantity: 0.25,
                    cate: 'fruits',
                    orderQ: 0,
                    AddedtoCart: 0
                },
                {
                    c: 'prod-5',
                    img: 'https://www.bigbasket.com/media/uploads/p/l/10000033_25-fresho-banana-yelakki.jpg',
                    desc: " Banana - Yelakki",
                    cost: 21,
                    Quantity: 0.25,
                    cate: 'fruits',
                    orderQ: 0,
                    AddedtoCart: 0
                },
                {
                    c: 'prod-6',
                    img: 'https://www.bigbasket.com/media/uploads/p/l/10000207_24-fresho-watermelon-small.jpg',
                    desc: "Watermelon - Small",
                    cost: 135,
                    Quantity: 0.25,
                    cate: 'fruits',
                    orderQ: 0,
                    AddedtoCart: 0
                }
            ];
            await Product.insertMany(defaultProducts);
            res.status(201).json({ message: "Default products initialized" });
        } else {
            res.json({ message: "Products already exist" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
