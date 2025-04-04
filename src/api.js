import axios from "axios";

const API_URL = `https://${process.env.URL}/api`;  // Updated port to match new backend port

// Fetch all products
export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    if (!res.data) {
      throw new Error('No data received from server');
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw to handle in component
  }
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/register`, userData);
    return res.data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, userData);
    return res.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

// Create a new order
export const placeOrder = async (orderData) => {
  try {
    const res = await axios.post(`${API_URL}/orders`, orderData);
    return res.data;
  } catch (error) {
    console.error("Error placing order:", error);
  }
};

// Update product quantity
export const updateProduct = async (productId, updateData) => {
  try {
    const res = await axios.put(`${API_URL}/products/${productId}`, updateData);
    return res.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Add product to cart
export const addToCart = async (productData) => {
  try {
    const res = await axios.post(`${API_URL}/cart/add`, productData);
    return res.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const getCart = async (userId) => {
  try {
    const res = await axios.get(`${API_URL}/cart/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
