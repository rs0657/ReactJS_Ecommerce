import express from "express";

const router = express.Router();

// Static products data - since Vercel doesn't support file system operations
const productsData = [
  {
    "c": "prod-1",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312601_2-fresho-tomato-local.jpg",
    "desc": "Tomato - Local",
    "cost": 10,
    "Quantity": 0.25,
    "cate": "veggies",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-2",
    "img": "https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg",
    "desc": "Onion (Loose)",
    "cost": 175,
    "Quantity": 0.25,
    "cate": "veggies",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-3",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312602_3-fresho-potato-local.jpg",
    "desc": "Potato - Local",
    "cost": 15,
    "Quantity": 0.5,
    "cate": "veggies",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-4",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312603_4-fresho-carrot-local.jpg",
    "desc": "Carrot - Local",
    "cost": 20,
    "Quantity": 0.25,
    "cate": "veggies",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-5",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312604_5-fresho-cabbage-local.jpg",
    "desc": "Cabbage - Local",
    "cost": 12,
    "Quantity": 0.5,
    "cate": "veggies",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-6",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312605_6-fresho-beans-local.jpg",
    "desc": "Beans - Local",
    "cost": 25,
    "Quantity": 0.25,
    "cate": "veggies",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-7",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312606_7-fresho-apple-red.jpg",
    "desc": "Apple - Red",
    "cost": 120,
    "Quantity": 0.5,
    "cate": "fruits",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-8",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312607_8-fresho-banana-robusta.jpg",
    "desc": "Banana - Robusta",
    "cost": 50,
    "Quantity": 1,
    "cate": "fruits",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-9",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312608_9-fresho-orange-valencia.jpg",
    "desc": "Orange - Valencia",
    "cost": 80,
    "Quantity": 0.5,
    "cate": "fruits",
    "orderQ": 0,
    "AddedtoCart": 0
  },
  {
    "c": "prod-10",
    "img": "https://www.bigbasket.com/media/uploads/p/l/40312609_10-fresho-mango-alphonso.jpg",
    "desc": "Mango - Alphonso",
    "cost": 200,
    "Quantity": 0.5,
    "cate": "fruits",
    "orderQ": 0,
    "AddedtoCart": 0
  }
];

// Get all products
router.get("/", async (req, res) => {
  try {
    // Return the static products data
    res.json(productsData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ 
      message: "Error fetching products", 
      error: error.message 
    });
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = productsData.find(p => p.c === req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ 
      message: "Error fetching product", 
      error: error.message 
    });
  }
});

// Add a new product (Note: In production, this would be stored in a database)
router.post("/", async (req, res) => {
  try {
    const newProduct = {
      c: `prod-${Date.now()}`, // Generate unique ID
      ...req.body,
      orderQ: 0,
      AddedtoCart: 0
    };
    
    // Note: In a serverless environment, this won't persist across requests
    // You'd need a database for persistent storage
    productsData.push(newProduct);
    
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ 
      message: "Error adding product", 
      error: error.message 
    });
  }
});

export default router;
