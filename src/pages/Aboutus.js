import '../styles/Aboutus.css'; // Import your about us section CSS file
import aboutUsImage from '../assets/images/aboutsus.png'; // Replace with the path to your actual image

const AboutUs = () => {
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
            About Harvest HQ
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Connecting communities with fresh, sustainable, and locally-sourced produce since 2020
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-800 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                  We are passionate about providing fresh and high-quality products to our customers. 
                  What started as a small family farm has grown into a community-driven marketplace 
                  that connects local farmers with families who care about what they eat.
                </p>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  Our mission is simple: to make fresh, organic, and sustainably-grown produce 
                  accessible to everyone while supporting local agriculture and farming communities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-3xl font-bold text-accent-600 group-hover:text-accent-700 transition-colors">100+</div>
                  <div className="text-secondary-600">Local Farmers</div>
                  <div className="w-8 h-1 bg-accent-400 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-3xl font-bold text-accent-600 group-hover:text-accent-700 transition-colors">10K+</div>
                  <div className="text-secondary-600">Happy Customers</div>
                  <div className="w-8 h-1 bg-accent-400 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="text-3xl font-bold text-accent-600 group-hover:text-accent-700 transition-colors">500+</div>
                  <div className="text-secondary-600">Fresh Products</div>
                  <div className="w-8 h-1 bg-accent-400 mx-auto mt-2 rounded-full group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl transform rotate-3"></div>
              <img 
                className="relative w-full h-auto rounded-2xl shadow-2xl" 
                src={aboutUsImage} 
                alt="About Harvest HQ - Fresh produce and farming" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our commitment to you and our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                Sustainability
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                We believe in farming practices that protect our environment and preserve 
                the earth for future generations.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                Community First
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Supporting local farmers and building strong relationships within our 
                community is at the heart of what we do.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">✨</div>
              <h3 className="text-xl font-heading font-semibold text-secondary-800 mb-4">
                Quality Promise
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Every product we deliver meets our strict quality standards for freshness, 
                taste, and nutritional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-secondary-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-secondary-600 mb-12 max-w-2xl mx-auto">
            The passionate people behind Harvest HQ who work tirelessly to bring you the best produce
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO", emoji: "👩‍💼" },
              { name: "Mike Chen", role: "Head of Operations", emoji: "👨‍💻" },
              { name: "Emily Davis", role: "Quality Assurance", emoji: "👩‍🔬" },
              { name: "David Wilson", role: "Farmer Relations", emoji: "👨‍🌾" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">{member.name}</h3>
                <p className="text-secondary-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to experience the freshest produce delivered straight to your door? 
            Start your journey with Harvest HQ today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Browse Products
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-accent-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
