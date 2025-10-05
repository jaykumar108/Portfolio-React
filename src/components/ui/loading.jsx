import React from 'react';

const Loading = ({ text = "Loading..." }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      {/* Simple Spinner */}
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid #374151',
          borderTop: '4px solid #3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }}
      />
      
      {/* Loading Text */}
      <div
        style={{
          fontSize: '18px',
          fontWeight: '500',
          marginBottom: '10px',
          textAlign: 'center'
        }}
      >
        {text}
      </div>
      
      {/* Dots Animation */}
      <div style={{ display: 'flex', gap: '4px' }}>
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#3b82f6',
            borderRadius: '50%',
            animation: 'bounce 1.4s ease-in-out infinite both'
          }}
        />
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#3b82f6',
            borderRadius: '50%',
            animation: 'bounce 1.4s ease-in-out infinite both',
            animationDelay: '0.16s'
          }}
        />
        <div
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#3b82f6',
            borderRadius: '50%',
            animation: 'bounce 1.4s ease-in-out infinite both',
            animationDelay: '0.32s'
          }}
        />
      </div>
      
      {/* CSS Animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading; 