import '../styles/Home.css'; // Import your home section CSS file
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent-600 via-primary-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-10 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-scale-in">
              Welcome to{' '}
              <span className="text-yellow-300 animate-glow">HARVEST HQ</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Discover fresh and locally sourced products for a healthy lifestyle. 
              From farm to your table, we bring you the finest organic produce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.3s'}}>
              <Link 
                to="/products" 
                className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow group"
              >
                <span className="relative z-10 flex items-center">
                  🛒 Explore Products
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <button className="relative overflow-hidden border-2 border-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 group">
                <span className="relative z-10 flex items-center">
                  📞 Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-10 left-10 text-6xl opacity-30 animate-float">🌱</div>
        <div className="absolute top-20 right-20 text-4xl opacity-30 animate-float" style={{animationDelay: '0.5s'}}>🥕</div>
        <div className="absolute bottom-10 left-1/4 text-5xl opacity-30 animate-float" style={{animationDelay: '1s'}}>🍎</div>
        <div className="absolute bottom-20 right-1/3 text-3xl opacity-30 animate-float" style={{animationDelay: '1.5s'}}>🥬</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Why Choose Harvest HQ?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We're committed to bringing you the freshest, highest quality produce while supporting local farmers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-in-left">
              <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">🥬</div>
              <h3 className="text-2xl font-heading font-semibold text-secondary-800 mb-4 group-hover:text-accent-600 transition-colors">
                Wide Variety of Fresh Produce
              </h3>
              <p className="text-secondary-600 leading-relaxed group-hover:text-secondary-700">
                Explore our diverse selection of locally grown fruits and vegetables, 
                harvested at peak freshness and delivered straight to your door.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-100 hover:from-yellow-100 hover:to-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">💰</div>
              <h3 className="text-2xl font-heading font-semibold text-secondary-800 mb-4 group-hover:text-orange-600 transition-colors">
                Exclusive Discounts
              </h3>
              <p className="text-secondary-600 leading-relaxed group-hover:text-secondary-700">
                Enjoy limited-time offers and exclusive discounts on your favorite products. 
                Save more while eating healthier with our seasonal deals.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>

            <div className="group text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:from-blue-100 hover:to-indigo-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-6 group-hover:animate-bounce transition-all duration-300">😊</div>
              <h3 className="text-2xl font-heading font-semibold text-secondary-800 mb-4 group-hover:text-blue-600 transition-colors">
                Happy Customers
              </h3>
              <p className="text-secondary-600 leading-relaxed group-hover:text-secondary-700">
                Read what our happy customers have to say about the quality of our products 
                and our commitment to excellent service.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-accent-600 via-primary-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-6 h-full">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border-r border-white opacity-20"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group animate-scale-in">
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110">10K+</div>
              <div className="text-accent-100 group-hover:text-white transition-colors duration-300">Happy Customers</div>
              <div className="w-12 h-1 bg-yellow-300 mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="group animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110">500+</div>
              <div className="text-accent-100 group-hover:text-white transition-colors duration-300">Fresh Products</div>
              <div className="w-12 h-1 bg-yellow-300 mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="group animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110">100+</div>
              <div className="text-accent-100 group-hover:text-white transition-colors duration-300">Local Farmers</div>
              <div className="w-12 h-1 bg-yellow-300 mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="group animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-all duration-300 transform group-hover:scale-110">24/7</div>
              <div className="text-accent-100 group-hover:text-white transition-colors duration-300">Customer Support</div>
              <div className="w-12 h-1 bg-yellow-300 mx-auto mt-2 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden animate-scale-in">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-6xl">📧</div>
              <div className="absolute top-4 right-4 text-4xl">✨</div>
              <div className="absolute bottom-4 left-4 text-4xl">🌿</div>
              <div className="absolute bottom-4 right-4 text-6xl">💌</div>
            </div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-6 animate-bounce-subtle">📧</div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-800 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
                Stay updated with the latest news, promotions, and healthy living tips. 
                Get exclusive access to seasonal produce and special offers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 border-2 border-secondary-200 rounded-full focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-100 transition-all duration-300 text-secondary-800 shadow-inner"
                />
                <button className="relative overflow-hidden bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow group">
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
              
              <p className="text-sm text-secondary-500 mt-4">
                🔒 No spam, only fresh updates! Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;