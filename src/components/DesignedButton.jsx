import React from "react";

const DesignedButton = ({ 
  children, 
  onClick, 
  className = "", 
  type = "button",
  variant = "default",
  size = "default"
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-full",
    default: "px-6 py-3 text-base rounded-full",
    lg: "px-8 py-4 text-lg rounded-full"
  };
  
  const variantClasses = {
    default: `
      bg-gradient-to-br from-gray-900 to-gray-800 
      border-2 border-transparent
      before:absolute before:inset-0 before:rounded-full before:p-[2px] 
      before:bg-gradient-to-br before:from-purple-400 before:via-purple-500 before:to-purple-600
      before:content-[''] before:z-[-1]
      hover:before:from-purple-300 hover:before:via-purple-400 hover:before:to-purple-500
      hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
      text-white
    `,
    primary: `
      bg-gradient-to-br from-blue-900 to-blue-800 
      border-2 border-transparent
      before:absolute before:inset-0 before:rounded-full before:p-[2px] 
      before:bg-gradient-to-br before:from-blue-400 before:via-blue-500 before:to-blue-600
      before:content-[''] before:z-[-1]
      hover:before:from-blue-300 hover:before:via-blue-400 hover:before:to-blue-500
      hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
      text-white
    `,
    success: `
      bg-gradient-to-br from-green-900 to-green-800 
      border-2 border-transparent
      before:absolute before:inset-0 before:rounded-full before:p-[2px] 
      before:bg-gradient-to-br before:from-green-400 before:via-green-500 before:to-green-600
      before:content-[''] before:z-[-1]
      hover:before:from-green-300 hover:before:via-green-400 hover:before:to-green-500
      hover:scale-105 hover:shadow-lg hover:shadow-green-500/25
      text-white
    `,
    danger: `
      bg-gradient-to-br from-red-900 to-red-800 
      border-2 border-transparent
      before:absolute before:inset-0 before:rounded-full before:p-[2px] 
      before:bg-gradient-to-br before:from-red-400 before:via-red-500 before:to-red-600
      before:content-[''] before:z-[-1]
      hover:before:from-red-300 hover:before:via-red-400 hover:before:to-red-500
      hover:scale-105 hover:shadow-lg hover:shadow-red-500/25
      text-white
    `
  };

  const focusClasses = {
    default: "focus:ring-purple-500",
    primary: "focus:ring-blue-500", 
    success: "focus:ring-green-500",
    danger: "focus:ring-red-500"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${focusClasses[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default DesignedButton;
