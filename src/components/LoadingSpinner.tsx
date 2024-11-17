import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = 'primary',
  text
}) => {
  const sizeClasses = {
    small: 'h-16 w-16',
    medium: 'h-24 w-24',
    large: 'h-32 w-32'
  };

  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-gray-900',
    white: 'border-white'
  };

  const spinTransition = {
    repeat: Infinity,
    duration: 1,
    ease: "linear"
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={spinTransition}
        className={`
          relative
          rounded-full
          border-4
          border-t-transparent
          ${sizeClasses[size]}
          ${colorClasses[color]}
        `}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-25"
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      {text && (
        <motion.p
          className="text-gray-600 font-medium text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default LoadingSpinner;