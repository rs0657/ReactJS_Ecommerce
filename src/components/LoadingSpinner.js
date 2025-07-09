import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Outer spinning ring */}
          <div className="animate-spin rounded-full h-24 w-24 border-4 border-transparent border-t-accent-600 border-r-primary-600 mx-auto mb-4 shadow-lg"></div>
          
          {/* Middle ring */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 animate-spin rounded-full h-20 w-20 border-4 border-transparent border-b-accent-400 border-l-primary-400" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          
          {/* Inner pulsing dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full animate-pulse shadow-glow"></div>
          
          {/* Glow effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-20 animate-pulse blur-xl"></div>
        </div>
        
        <div className="text-xl text-secondary-700 font-medium animate-fade-in mb-4">
          {message}
        </div>
        
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '300ms'}}></div>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-2 bg-secondary-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
