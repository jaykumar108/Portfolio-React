import React from 'react';

const Loading = ({ size = 'large', progress = 99, isComplete = false }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    default: 'w-20 h-20',
    large: 'w-24 h-24'
  };

  if (isComplete) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-green-600">
        {/* Success Animation */}
        <div className={`${sizeClasses[size]} relative`}>
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <svg 
              className="w-2/3 h-2/3 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={4} 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="mt-6 text-white text-xl font-semibold animate-fade-in">
          Success!
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Modern Loading Container */}
      <div className="relative">
        {/* Outer Ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-slate-700/30 flex items-center justify-center`}>
          {/* Inner Ring with Animation */}
          <div className={`${sizeClasses[size]} rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin`} 
               style={{ animationDuration: '1s' }}>
          </div>
          
          {/* Progress Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin"
               style={{ 
                 animationDuration: '0.8s',
                 animationDirection: 'reverse'
               }}>
          </div>
          
          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-sm font-medium mb-1">
                {progress}%
              </div>
              <div className="text-slate-400 text-xs">
                Loading...
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Dots */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-8 text-center">
        <div className="text-white text-lg font-medium mb-2">
          Please wait
        </div>
        <div className="flex space-x-1 justify-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 