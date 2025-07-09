import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌱</span>
              <h3 className="text-xl font-heading font-bold text-white">HARVEST HQ</h3>
            </div>
            <p className="text-secondary-300 leading-relaxed">
              Fresh, organic produce delivered from local farms to your table. 
              Supporting sustainable agriculture and healthy communities.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: '📘', href: '#', label: 'Facebook' },
                { icon: '📷', href: '#', label: 'Instagram' },
                { icon: '🐦', href: '#', label: 'Twitter' },
                { icon: '📱', href: '#', label: 'WhatsApp' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-700 hover:bg-accent-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'About Us', path: '/aboutus' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Customer Service</h4>
            <ul className="space-y-2">
              {[
                'Help Center',
                'Shipping Info',
                'Returns & Exchanges',
                'Size Guide',
                'Track Your Order'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-secondary-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-accent-400 mt-1">📧</span>
                <div>
                  <p className="text-secondary-300">HarvestH@gmail.com</p>
                  <p className="text-sm text-secondary-400">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-400 mt-1">📞</span>
                <div>
                  <p className="text-secondary-300">+91 7680954321</p>
                  <p className="text-sm text-secondary-400">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-400 mt-1">📍</span>
                <div>
                  <p className="text-secondary-300">Mumbai, Maharashtra</p>
                  <p className="text-sm text-secondary-400">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Stay Fresh with Our Newsletter</h4>
              <p className="text-secondary-300">Get the latest updates on fresh produce and exclusive offers.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-700 border border-secondary-600 rounded-lg text-white placeholder-secondary-400 focus:border-accent-500 focus:outline-none transition-colors"
              />
              <button className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400">
              © {currentYear} Harvest HQ. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary-400 hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-400 hover:text-accent-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-secondary-400 hover:text-accent-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
