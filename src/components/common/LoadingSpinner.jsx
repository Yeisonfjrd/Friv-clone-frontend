import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Círculo exterior */}
        <div className="absolute inset-0 animate-spin">
          <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
        
        {/* Círculo interior */}
        <div className="absolute inset-0 animate-ping">
          <div className="h-16 w-16 rounded-full border-4 border-primary/30"></div>
        </div>
        
        {/* Efecto de brillo */}
        <div className="absolute inset-0 animate-pulse">
          <div className="h-16 w-16 rounded-full bg-primary/20"></div>
        </div>
        
        {/* Texto de carga */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-primary">
          Cargando juegos...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 