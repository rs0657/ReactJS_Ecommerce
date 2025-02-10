import './Home.css'; // Import your home section CSS file
import { fetchProducts } from "./api";

const Home = () => {
  return (
    <div className="home-section">
      <div className="hero-container">
        <h1>Welcome to HARVEST HQ</h1>
        <p>Discover fresh and locally sourced products for a healthy lifestyle.</p>
        <a href="/products" className="cta-button">Explore Products</a>
      </div>
      <div className="features-container">
        <div className="feature">
          <h2>Wide Variety of Fresh Produce</h2>
          <p>Explore our diverse selection of locally grown fruits and vegetables.</p>
        </div>
        <div className="feature">
          <h2>Exclusive Discounts</h2>
          <p>Enjoy limited-time offers and exclusive discounts on your favorite products.</p>
        </div>
        <div className="feature">
          <h2>Happy Customers</h2>
          <p>Read what our happy customers have to say about the quality of our products.</p>
        </div>
      </div>
      <div className="newsletter-container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest news, promotions, and healthy living tips.</p>
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
}

export default Home;