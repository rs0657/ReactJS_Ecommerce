import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/ProductsTemp.js";

dotenv.config();
const app = express();

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
app.use("/api/products", productRoutes);
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
export default app;
