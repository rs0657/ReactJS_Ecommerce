import { useState, useEffect } from 'react';
import { fetchProducts, addToCart } from "../services/api";
import '../styles/Productlist.css';
import Popout from './Popout';
import LoadingSpinner from './LoadingSpinner';

export default function Productlist({ receivecartCount, popupStatus, popupclose }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await fetchProducts();
            if (data) {
                setProducts(data);
            }
        } catch (err) {
            setError('Failed to load products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    function handleInc(name) {
        let sampleData = products.map((val) => {
            if (val.desc === name) {
                return { ...val, orderQ: val.orderQ + 1 };
            } else {
                return val;
            }
        });
        setProducts(sampleData);
    }

    function handleDec(name) {
        let sampleData = products.map((val) => {
            if (val.desc === name) {
                if (val.orderQ > 0) {
                    return { ...val, orderQ: val.orderQ - 1 };
                } else {
                    return { ...val, orderQ: 0 };
                }
            } else {
                return val;
            }
        });
    
        setProducts(sampleData);
    }

    async function handleAdd(name) {
        const updatedProducts = products.map((val) => {
            if(val.desc === name) {
                return { ...val, AddedtoCart: val.orderQ > 0 ? 1 : 0 };
            }
            return val;
        });

        setProducts(updatedProducts);

        // Update cart count
        const cartCount = updatedProducts.filter(item => item.AddedtoCart === 1).length;
        console.log('Cart count:', cartCount); // Debug log
        receivecartCount(cartCount);

        try {
            const productToAdd = updatedProducts.find(p => p.desc === name);
            if (productToAdd && productToAdd.orderQ > 0) {
                await addToCart({
                    userId: "temp-user-id",
                    productId: productToAdd._id || name, // Fallback to name if _id not available
                    quantity: productToAdd.orderQ,
                    name: productToAdd.desc,
                    price: productToAdd.cost
                });
            }
        } catch (err) {
            console.error('Failed to sync with database:', err);
        }
    }

    if (loading) {
        return <LoadingSpinner message="Loading fresh products..." />;
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center">
                <div className="text-center bg-white p-12 rounded-3xl shadow-2xl max-w-md mx-4 animate-scale-in">
                    <div className="text-8xl mb-6 animate-bounce">😞</div>
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h2>
                    <p className="text-lg text-red-500 mb-6">{error}</p>
                    <button 
                        onClick={loadProducts}
                        className="relative overflow-hidden bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                    >
                        <span className="relative z-10 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Try Again
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        );
    }

    if (!products.length) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
                <div className="text-center bg-white p-12 rounded-3xl shadow-2xl max-w-md mx-4 animate-scale-in">
                    <div className="text-8xl mb-6 animate-float">📦</div>
                    <h2 className="text-2xl font-bold text-secondary-800 mb-4">No products found</h2>
                    <p className="text-lg text-secondary-600">Check back soon for fresh arrivals!</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="text-center relative">
                    {/* Background decoration */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-5">
                        <div className="text-9xl">🛒</div>
                    </div>
                    
                    <div className="relative z-10">
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-secondary-800 mb-4 animate-scale-in">
                            Fresh Products
                        </h1>
                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto animate-slide-up">
                            Discover our selection of farm-fresh, organic produce delivered straight from local farms
                        </p>
                        
                        {/* Decorative line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-primary-500 mx-auto mt-6 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div 
                            key={product.c} 
                            className="group bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent-200 animate-scale-in"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <img 
                                    src={product.img} 
                                    alt={product.desc}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-600 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    ✨ Fresh
                                </div>
                                
                                {/* Quantity badge */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                                    {product.Quantity}kg available
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-6">
                                <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                                    {product.desc}
                                </h3>
                                
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-2xl font-bold text-accent-600">
                                        ₹{product.cost}
                                        <span className="text-sm text-secondary-500 font-normal">/kg</span>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                                    <div className="text-sm text-secondary-600">
                                        Total: <span className="font-bold text-accent-600">₹{product.cost * (product.orderQ || 0)}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <button 
                                            onClick={() => handleDec(product.desc)}
                                            className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-red-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                            disabled={!product.orderQ}
                                        >
                                            <span className="text-lg font-bold">−</span>
                                        </button>
                                        
                                        <span className="w-12 text-center font-bold text-lg text-secondary-800">
                                            {product.orderQ || 0}
                                        </span>
                                        
                                        <button 
                                            onClick={() => handleInc(product.desc)}
                                            className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-200"
                                        >
                                            <span className="text-lg font-bold">+</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <button 
                                    onClick={() => handleAdd(product.desc)}
                                    disabled={!product.orderQ}
                                    className={`w-full relative overflow-hidden py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                                        product.orderQ > 0
                                            ? 'bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white hover:scale-105 hover:shadow-glow group/btn'
                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    {product.AddedtoCart === 1 ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Added to Cart
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                            </svg>
                                            Add to Cart
                                        </span>
                                    )}
                                    
                                    {/* Button shine effect */}
                                    {product.orderQ > 0 && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 group-hover/btn:animate-shimmer"></div>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Popup */}
            <Popout 
                arrObjj={products} 
                popupStatus={popupStatus} 
                popupclose={popupclose}
            />
        </div>
    );
}