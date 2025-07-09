import "../styles/Header.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import Productlist from "./Prodlist";
import AboutUs from "../pages/Aboutus";
import ContactUs from "../pages/Contact";
import Footer from "./Footer";
import { useState } from 'react';

const Header = ({ countH, setcount, popStatus, setpopStatus }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <header className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-accent-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-2xl font-heading font-bold bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent hover:from-accent-700 hover:to-primary-700 transition-all duration-300 transform hover:scale-105">
                                🌱 HARVEST HQ
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                <li>
                                    <Link 
                                        to="/" 
                                        className="text-secondary-700 hover:text-accent-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent-50"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/products" 
                                        className="text-secondary-700 hover:text-accent-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent-50"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/aboutus" 
                                        className="text-secondary-700 hover:text-accent-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent-50"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className="text-secondary-700 hover:text-accent-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent-50"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Cart and Mobile Menu Button */}
                        <div className="flex items-center space-x-4">
                            {/* Cart Icon */}
                            <button 
                                onClick={setpopStatus}
                                className="relative p-3 text-secondary-600 hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-xl transition-all duration-300 hover:bg-accent-50 transform hover:scale-110 group"
                            >
                                <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l1.5-6M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                </svg>
                                {countH > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                                        {countH}
                                    </span>
                                )}
                            </button>

                            {/* Mobile menu button */}
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 text-secondary-600 hover:text-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-lg"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-gray-200">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link 
                                    to="/" 
                                    className="block px-3 py-2 text-secondary-700 hover:text-accent-600 hover:bg-accent-50 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link 
                                    to="/products" 
                                    className="block px-3 py-2 text-secondary-700 hover:text-accent-600 hover:bg-accent-50 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Products
                                </Link>
                                <Link 
                                    to="/aboutus" 
                                    className="block px-3 py-2 text-secondary-700 hover:text-accent-600 hover:bg-accent-50 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="block px-3 py-2 text-secondary-700 hover:text-accent-600 hover:bg-accent-50 rounded-md text-base font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            
            <main className="min-h-screen">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route 
                        path='/products' 
                        element={
                            <Productlist 
                                receivecartCount={setcount}
                                popupStatus={popStatus}
                                popupclose={setpopStatus}
                            />
                        } 
                    />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contact' element={<ContactUs />} />
                </Routes>
            </main>
            
            <Footer />
        </div>
    );
}

export default Header;
