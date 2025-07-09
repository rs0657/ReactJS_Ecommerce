# Project Structure Documentation

## Frontend Structure (`/src`)

```
src/
├── assets/                    # Static assets
│   └── images/               # Images, icons, graphics
│       ├── logo.svg
│       ├── aboutsus.png
│       └── image.png
│
├── components/               # Reusable UI components
│   ├── Header.js            # Navigation header
│   ├── Footer.js            # Footer component
│   ├── LoadingSpinner.js    # Loading indicator
│   ├── Popout.js            # Cart popup component
│   └── Prodlist.js          # Product listing component
│
├── pages/                   # Page components (screens)
│   ├── Home.js              # Home page
│   ├── Aboutus.js           # About us page
│   └── Contact.js           # Contact page
│
├── services/                # API services and external integrations
│   └── api.js               # API calls and data fetching
│
├── styles/                  # CSS stylesheets
│   ├── App.css              # Main app styles
│   ├── index.css            # Global styles
│   ├── Header.css           # Header component styles
│   ├── Home.css             # Home page styles
│   ├── Aboutus.css          # About page styles
│   ├── Contact.css          # Contact page styles
│   └── Productlist.css      # Product listing styles
│
├── tests/                   # Test files
│   ├── App.test.js          # App component tests
│   └── setupTests.js        # Test configuration
│
├── utils/                   # Utility functions and helpers
│   └── (empty - for future utilities)
│
├── App.js                   # Main app component
├── index.js                 # App entry point
└── reportWebVitals.js       # Performance monitoring
```

## Backend Structure (`/backend`)

```
backend/
├── data/                    # Data files (temporary JSON storage)
│   └── products.json        # Product data
│
├── models/                  # Database models (MongoDB schemas)
│   ├── User.js              # User model
│   ├── Product.js           # Product model
│   ├── Cart.js              # Cart model
│   └── Order.js             # Order model
│
├── routes/                  # API routes
│   ├── auth.js              # Authentication routes
│   ├── Products.js          # Product routes (MongoDB)
│   ├── ProductsTemp.js      # Product routes (JSON file)
│   ├── cart.js              # Cart routes
│   └── orders.js            # Order routes
│
├── .env                     # Environment variables
├── package.json             # Node.js dependencies
└── index.js                 # Server entry point
```

## Other Project Files

```
├── public/                  # Public assets
│   ├── index.html           # Main HTML file
│   ├── favicon.ico          # Favicon
│   └── manifest.json        # PWA manifest
│
├── server/                  # Alternative server setup
│   ├── server.js            # Express server
│   └── package.json         # Server dependencies
│
├── dump/                    # Database backup files
│   └── ecommerce/           # MongoDB dump
│
├── package.json             # Frontend dependencies
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```

## Key Features of This Organization

### 1. **Separation of Concerns**
- Components are separated from pages
- Styles are centralized in their own folder
- API calls are isolated in services
- Static assets are properly organized

### 2. **Easy Navigation**
- All related files are grouped together
- Clear folder names indicate purpose
- Consistent naming conventions

### 3. **Scalability**
- Easy to add new components, pages, or services
- Clear structure for team collaboration
- Maintainable codebase

### 4. **Import Clarity**
- Organized imports make dependencies clear
- Relative paths are predictable
- No mixing of concerns in imports

## Usage Guidelines

### Adding New Components
```javascript
// Place in /src/components/
// Import styles from /src/styles/
// Export as default
```

### Adding New Pages
```javascript
// Place in /src/pages/
// Import components from /src/components/
// Import styles from /src/styles/
```

### Adding New API Functions
```javascript
// Add to /src/services/api.js
// Follow existing patterns
// Handle errors consistently
```

### Adding New Styles
```css
/* Place in /src/styles/ */
/* Use consistent naming */
/* Import in respective components */
```

This structure provides a solid foundation for a scalable React/Node.js ecommerce application!
