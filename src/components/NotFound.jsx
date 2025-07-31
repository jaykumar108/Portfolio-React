import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from './Button';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
      <Helmet>
        <title>404 - Page Not Found | Jay Sharma Portfolio</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Jay Sharma's portfolio." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Button 
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          onClick={handleGoHome}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound; 