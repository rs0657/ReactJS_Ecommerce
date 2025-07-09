# ReactJS E-commerce Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

Welcome to the ReactJS E-commerce Application! This project provides a seamless online shopping experience, featuring a dynamic product catalog, shopping cart functionality, and more.

## 🔒 **IMPORTANT: Environment Variables Security**

### ⚠️ **NEVER commit these files to GitHub:**
- `.env`
- `.env.local`
- `.env.development`
- `.env.production`
- `backend/.env`

### ✅ **What's safe to commit:**
- `.env.example` - Template files
- `SECURITY.md` - Security documentation
- This README

### 🛡️ **Before deploying to production:**
1. Use different credentials than development
2. Set environment variables in your hosting platform
3. Use strong, unique secrets
4. Never expose sensitive data in frontend code

### 🚀 **Setup Environment Variables:**
```bash
# Copy environment templates
cp .env.example .env
cp backend/.env.example backend/.env

# Edit the files and add your actual values
# NEVER commit the .env files!
```

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Introduction

This application is designed to offer users an intuitive and efficient online shopping platform. Users can browse products, add items to their cart, and manage their purchases effortlessly.

## Features

- **Product Catalog**: Browse a variety of products with detailed information.
- **Shopping Cart**: Add, remove, and adjust product quantities in the cart.
- **User Authentication**: Secure login and registration for users.
- **Responsive Design**: Optimized for various devices and screen sizes.

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=for-the-badge&logo=css-modules&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rs0657/ReactJS_Ecommerce.git
   cd ReactJS_Ecommerce
   ```

2. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**:
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in both `frontend` and `backend` directories.
   - Add the necessary environment variables:

   **Frontend (`frontend/.env`)**:
   ```
   REACT_APP_API_URL=your_backend_api_url
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

   **Backend (`backend/.env`)**:
   ```
   MONGODB_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key
   ```

5. **Start the application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../frontend
     npm start
     ```

## Usage

After setting up, you can:

- **Browse Products**: View the list of available products.
- **Add to Cart**: Select products and add them to your shopping cart.
- **Manage Cart**: Update product quantities or remove items.
- **Checkout**: Proceed to purchase the items in your cart.

## Contributing

We welcome contributions to enhance this project! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m 'Add YourFeatureName'
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature/YourFeatureName
   ```
6. **Open a pull request**.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact Information

For any queries or support, feel free to contact:

- **Author**: Raghuram Srikanth
- **Email**: raghuramsrikanth1104@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/rs0657/)
