import '../styles/Contact.css';
import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-accent-600 via-primary-600 to-purple-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-10 animate-float"></div>
                    <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 animate-scale-in">
                        Contact Harvest HQ
                    </h1>
                    <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
                        Have questions or feedback? We'd love to hear from you!
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 animate-slide-in-left">
                            <h2 className="text-2xl font-heading font-bold text-secondary-800 mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-100 transition-all duration-300 shadow-inner"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-100 transition-all duration-300 shadow-inner"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-100 transition-all duration-300 resize-none shadow-inner"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full relative overflow-hidden bg-gradient-to-r from-accent-600 to-primary-600 hover:from-accent-700 hover:to-primary-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow group"
                                >
                                    <span className="relative z-10">Send Message</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-2xl font-heading font-bold text-secondary-800 mb-6">
                                    Get in Touch
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary-800 mb-1">Email</h3>
                                            <p className="text-secondary-600">HarvestH@gmail.com</p>
                                            <p className="text-sm text-secondary-500 mt-1">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary-800 mb-1">Phone</h3>
                                            <p className="text-secondary-600">+91 7680954321</p>
                                            <p className="text-sm text-secondary-500 mt-1">Mon-Fri: 9AM-6PM IST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-secondary-800 mb-1">Address</h3>
                                            <p className="text-secondary-600">123 Farm Fresh Street<br />Green Valley, Mumbai 400001<br />Maharashtra, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h2 className="text-2xl font-heading font-bold text-secondary-800 mb-6">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    <div className="border-b border-secondary-200 pb-4">
                                        <h3 className="font-semibold text-secondary-800 mb-2">What are your delivery hours?</h3>
                                        <p className="text-secondary-600 text-sm">We deliver from 8 AM to 8 PM, Monday through Sunday.</p>
                                    </div>
                                    <div className="border-b border-secondary-200 pb-4">
                                        <h3 className="font-semibold text-secondary-800 mb-2">Do you offer organic products?</h3>
                                        <p className="text-secondary-600 text-sm">Yes, all our products are certified organic and locally sourced.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-secondary-800 mb-2">What's your return policy?</h3>
                                        <p className="text-secondary-600 text-sm">We offer a 100% satisfaction guarantee. Contact us within 24 hours if you're not satisfied.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-heading font-bold text-secondary-800 mb-4">
                        Follow Us
                    </h2>
                    <p className="text-secondary-600 mb-8">
                        Stay connected with us on social media for the latest updates and fresh produce tips
                    </p>
                    <div className="flex justify-center space-x-6">
                        {[
                            { name: 'Facebook', icon: '📘', href: '#' },
                            { name: 'Instagram', icon: '📷', href: '#' },
                            { name: 'Twitter', icon: '🐦', href: '#' },
                            { name: 'WhatsApp', icon: '📱', href: '#' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="w-12 h-12 bg-accent-100 hover:bg-accent-200 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;