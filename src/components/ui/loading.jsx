import React from 'react';

const Loading = ({ size = 'default', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-sm',
    default: 'text-lg',
    large: 'text-xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50">
      {/* Spinner */}
      <div className={`${sizeClasses[size]} mb-4 relative`}>
        <div className="w-full h-full border-4 border-purple-200/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
      </div>

      {/* Loading Text */}
      <div className={`${textSizes[size]} font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-2`}>
        {text}
      </div>

      {/* Animated Dots */}
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default Loading; 