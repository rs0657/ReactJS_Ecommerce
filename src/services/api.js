import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? '/api'  // For Vercel deployment
    : 'http://localhost:5000/api'); // For local development

// Static fallback data in case API fails
const fallbackProducts = [
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

// Fetch all products
export const fetchProducts = async () => {
  try {
    console.log('Fetching products from:', `${API_BASE_URL}/products`);
    console.log('Environment:', process.env.NODE_ENV);
    
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON - API endpoint might be returning HTML');
    }
    
    const data = await response.json();
    console.log('Products fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Get products error:', error);
    console.error('API_BASE_URL:', API_BASE_URL);
    console.error('Full error details:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    
    // Return fallback data when API fails
    console.log('Using fallback product data');
    return fallbackProducts;
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
