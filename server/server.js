const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
let users = [];
let products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    price: 4.99,
    image: '/api/placeholder/300/200',
    category: 'vegetables',
    description: 'Fresh organic tomatoes from local farms'
  },
  {
    id: 2,
    name: 'Fresh Apples',
    price: 3.49,
    image: '/api/placeholder/300/200',
    category: 'fruits',
    description: 'Crisp and sweet apples'
  }
];

// Auth routes
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({ success: true, user: { id: user.id, email: user.email } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/api/register', (req, res) => {
  const { email, password, name } = req.body;
  
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  
  const newUser = {
    id: users.length + 1,
    email,
    password,
    name
  };
  
  users.push(newUser);
  res.json({ success: true, user: { id: newUser.id, email: newUser.email } });
});

// Product routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
