import React from 'react';

const HomeDisplay = ({ currentCalories, totalCalories }) => {
  return (
    <div>
      <div>
        <p className="text-gray-500">Per Package</p>
        <p className="text-2xl">{currentCalories} Calories</p>
      </div>
      <div>
        <p className="text-gray-500">Total</p>
        <p className="text-2xl">{totalCalories} Calories</p>
      </div>
    </div>
  );
};

export { HomeDisplay };
