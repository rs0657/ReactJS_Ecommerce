import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Path to the JSON file
const productsFilePath = path.join(__dirname, "../data/products.json");

// Helper function to read products from JSON file
const readProductsFromFile = () => {
  try {
    const data = fs.readFileSync(productsFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading products file:", error);
    return [];
  }
};

// Helper function to write products to JSON file
const writeProductsToFile = (products) => {
  try {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error("Error writing products file:", error);
  }
};

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = readProductsFromFile();
    res.json(products);
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
    const products = readProductsFromFile();
    const product = products.find(p => p.c === req.params.id);
    
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

// Add a new product
router.post("/", async (req, res) => {
  try {
    const products = readProductsFromFile();
    const newProduct = {
      c: `prod-${Date.now()}`, // Generate unique ID
      ...req.body,
      orderQ: 0,
      AddedtoCart: 0
    };
    
    products.push(newProduct);
    writeProductsToFile(products);
    
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
