const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Static products data - since we're not using file system operations
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

// Configure CORS for Vercel deployment
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://localhost:3000',
    /\.vercel\.app$/,
    /\.netlify\.app$/,
    process.env.FRONTEND_URL || 'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json());

// Temporarily disable MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000,
//   autoIndex: true,
//   maxPoolSize: 10,
//   socketTimeoutMS: 45000,
//   family: 4
// }).then(() => {
//   console.log("MongoDB Connected Successfully");
// }).catch(err => {
//   console.error("MongoDB Connection Error:", err);
//   process.exit(1);
// });

// app.use("/api/auth", authRoutes);
// Products routes
app.get("/api/products", (req, res) => {
  try {
    res.json(productsData);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ 
      message: "Error fetching products", 
      error: error.message 
    });
  }
});

app.get("/api/products/:id", (req, res) => {
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

// app.use("/api/orders", orderRoutes);
// app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => res.send("API is running..."));

// Debug route to check if API is working
app.get("/api", (req, res) => {
  res.json({ 
    message: "API is working!", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check route
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString() 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the app for Vercel
module.exports = app;
