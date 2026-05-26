import React from 'react';

const Badge = React.forwardRef(({ 
  className = '',
  variant = 'default',
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-input bg-background text-foreground',
  };

  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export { Badge }; 