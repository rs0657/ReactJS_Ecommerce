import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? '/api'  // For Vercel deployment
    : 'http://localhost:5000/api'); // For local development

// Fetch all products
export const fetchProducts = async () => {
  try {
    console.log('Fetching products from:', `${API_BASE_URL}/products`);
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Products fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Get products error:', error);
    console.error('API_BASE_URL:', API_BASE_URL);
    return [];
  }
};

// Register a new user
export const registerUser = async (email, password, name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Register error:', error);
    return { success: false, message: 'Network error' };
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Network error' };
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get product error:', error);
    return null;
  }
};

// Add product to cart
export const addToCart = async (productData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/cart/add`, productData);
    return res.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

export const getCart = async (userId) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/cart/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};
