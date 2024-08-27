import React from 'react';

// Define the interface for the loader component props
interface LoaderProps {
  text?: string; // Optional text to display alongside the loader
}

// Loader component
const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="loader" />
      <span className="ml-2">{text}</span>
    </div>
  );
};

export default Loader;
