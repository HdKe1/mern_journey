import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button 
      onClick={handleClick} 
      className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Click Me
    </button>
  );
};

export default Button;
