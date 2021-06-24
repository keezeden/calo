import React from 'react';

const HomeDisplay = ({ currentCalories, totalCalories }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-2/3">
        <p className="text-gray-500 text-left">Per Package</p>
        <p className="text-2xl text-left">{currentCalories} Calories</p>
      </div>
      <div className="w-2/3">
        <p className="text-gray-500 text-left">Total</p>
        <p className="text-2xl text-left">{totalCalories} Calories</p>
      </div>
    </div>
  );
};

export { HomeDisplay };
