import React from 'react';
import './Popup.css';

function Popout({ arrObjj, popupStatus, popupclose }) {
    if (!popupStatus) return null;

    // Only show items that have both AddedtoCart=1 and orderQ > 0
    const cartItems = arrObjj.filter(item => item.AddedtoCart === 1 && item.orderQ > 0);
    
    console.log('Cart Items:', cartItems); // Debug log

    const totalAmount = cartItems.reduce((total, item) => total + (item.cost * item.orderQ), 0);

    return (
        <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in'>
            <div className='bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in'>
                {/* Header */}
                <div className='bg-gradient-to-r from-accent-600 via-primary-600 to-purple-600 text-white p-6 flex justify-between items-center relative overflow-hidden'>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 opacity-20 rounded-full transform -translate-x-12 translate-y-12"></div>
                    
                    <div className="relative z-10">
                        <h2 className='text-2xl font-heading font-bold flex items-center'>
                            <span className="animate-bounce mr-2">🛒</span> Your Cart
                        </h2>
                        <p className='text-white/80'>{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
                    </div>
                    <button 
                        onClick={popupclose} 
                        className='relative z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90'
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className='p-6 overflow-y-auto max-h-[calc(90vh-200px)]'>
                    {cartItems.length > 0 ? (
                        <div className='space-y-4'>
                            {cartItems.map((item, index) => (
                                <div key={item.c || index} className='group bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 flex items-center justify-between hover:from-accent-50 hover:to-primary-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-slide-in-right' style={{animationDelay: `${index * 0.1}s`}}>
                                    <div className='flex items-center space-x-4'>
                                        <div className="relative">
                                            <img 
                                                src={item.img} 
                                                alt={item.desc}
                                                className='w-16 h-16 rounded-xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300'
                                            />
                                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                                <span className="text-xs text-white font-bold">✓</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='font-semibold text-secondary-800 group-hover:text-accent-600 transition-colors'>{item.desc}</h3>
                                            <p className='text-secondary-500'>₹{item.cost} per kg</p>
                                        </div>
                                    </div>
                                    
                                    <div className='flex items-center space-x-6'>
                                        <div className='text-center'>
                                            <p className='text-sm text-secondary-500'>Quantity</p>
                                            <p className='font-bold text-lg text-secondary-800'>{item.orderQ}kg</p>
                                        </div>
                                        <div className='text-center'>
                                            <p className='text-sm text-secondary-500'>Total</p>
                                            <p className='font-bold text-xl text-transparent bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text'>₹{item.cost * item.orderQ}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='text-center py-16 animate-scale-in'>
                            <div className='text-8xl mb-6 animate-float'>🛒</div>
                            <h3 className='text-2xl font-semibold text-secondary-800 mb-3'>Your cart is empty</h3>
                            <p className='text-secondary-500 text-lg'>Add some fresh products to get started!</p>
                            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-primary-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className='border-t border-gray-200 p-6 bg-gradient-to-r from-gray-50 to-blue-50'>
                        <div className='flex justify-between items-center mb-6'>
                            <span className='text-2xl font-semibold text-secondary-800'>Total Amount:</span>
                            <span className='text-3xl font-bold text-transparent bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text'>₹{totalAmount}</span>
                        </div>
                        
                        <div className='flex space-x-4'>
                            <button 
                                onClick={popupclose}
                                className='flex-1 py-4 px-6 border-2 border-secondary-300 text-secondary-700 rounded-2xl font-semibold hover:bg-secondary-50 hover:border-secondary-400 transition-all duration-300 transform hover:scale-105'
                            >
                                Continue Shopping
                            </button>
                            <button className='flex-1 py-4 px-6 bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow relative overflow-hidden group'>
                                <span className="relative z-10">Proceed to Checkout</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                        </div>
                        
                        <div className='text-center mt-4 p-3 bg-green-100 rounded-xl'>
                            <p className='text-sm text-green-700 font-medium'>
                                🚚 Free delivery on orders above ₹500 • 📱 24/7 Customer Support
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Popout;
