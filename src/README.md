# Source Code Organization

This directory is organized into logical folders for better maintainability and development experience.

## 📁 Folder Structure

```
src/
├── 📁 assets/           # Static assets (images, icons, etc.)
│   └── images/          # Image files
├── 📁 components/       # Reusable React components
├── 📁 pages/           # Page-level components
├── 📁 services/        # API calls and external services
├── 📁 styles/          # CSS/SCSS files
├── 📁 tests/           # Test files
├── 📁 utils/           # Utility functions and helpers
├── App.js              # Main App component
└── index.js            # Application entry point
```

## 📋 Description

### 🎨 `/assets`
Contains all static assets like images, icons, fonts, etc.
- `images/` - All image files (.png, .jpg, .svg, etc.)

### 🧩 `/components`
Reusable React components that can be used across multiple pages:
- `Header.js` - Navigation header
- `Footer.js` - Footer component
- `LoadingSpinner.js` - Loading indicator
- `Popout.js` - Popup/modal component
- `Prodlist.js` - Product list component

### 📄 `/pages`
Page-level components representing different routes:
- `Home.js` - Home page
- `Contact.js` - Contact page
- `Aboutus.js` - About us page

### 🔌 `/services`
API calls and external service integrations:
- `api.js` - API endpoints and HTTP requests

### 🎨 `/styles`
CSS files organized by component/page:
- `App.css` - Main app styles
- `Header.css` - Header component styles
- `Home.css` - Home page styles
- `Contact.css` - Contact page styles
- `Aboutus.css` - About us page styles
- `Popup.css` - Popup component styles
- `Productlist.css` - Product list component styles
- `index.css` - Global styles

### 🧪 `/tests`
Test files for components and utilities:
- `App.test.js` - App component tests
- `setupTests.js` - Test setup configuration

### 🔧 `/utils`
Utility functions and helpers:
- `reportWebVitals.js` - Performance monitoring

## 🚀 Benefits of This Organization

1. **Easy Navigation** - Find files quickly based on their purpose
2. **Maintainability** - Changes to specific functionality are easier to locate
3. **Scalability** - Easy to add new components, pages, or services
4. **Team Collaboration** - Clear structure helps team members understand the codebase
5. **Import Clarity** - Clear import paths make dependencies obvious

## 📝 Import Examples

```javascript
// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

// Services
import { fetchProducts } from './services/api';

// Styles
import './styles/App.css';
import './styles/Header.css';

// Utils
import reportWebVitals from './utils/reportWebVitals';

// Assets
import logo from './assets/images/logo.svg';
```
