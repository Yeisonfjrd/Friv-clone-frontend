import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative">
        <div className="absolute inset-0 animate-spin">
          <div className="w-16 h-16 border-4 rounded-full border-primary border-t-transparent"></div>
        </div>

        <div className="absolute inset-0 animate-ping">
          <div className="w-16 h-16 border-4 rounded-full border-primary/30"></div>
        </div>

        <div className="absolute inset-0 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-primary/20"></div>
        </div>
        
        <div className="absolute text-sm font-medium -translate-x-1/2 -bottom-8 left-1/2 whitespace-nowrap text-primary">
          Cargando juegos...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 