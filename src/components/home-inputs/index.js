import React from 'react';

const HomeInputs = ({ updateKj, updateServings }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
        type="number"
        placeholder="Kj Per Serving"
        className="w-2/3 h-16 text-center focus:outline-none focus:border-primary border-2 border-gray-200 bg-gray-200 rounded-lg px-4 py-2 my-2"
        onChange={updateKj}
      />
      <input
        type="number"
        placeholder="Servings Per Package"
        className="w-2/3 h-16 text-center focus:outline-none focus:border-secondary bg-gray-200 border-2 border-gray-200 rounded-lg px-4 py-2 my-2"
        onChange={updateServings}
      />
    </div>
  );
};

export { HomeInputs };
