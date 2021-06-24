import React from 'react';

const HomeActions = ({ historyPush, historyPop }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <button className="w-2/3 tracking-widest text-white uppercase text-lg my-2 h-16 rounded-lg bg-gradient" onClick={historyPush}>
        Add
      </button>
      <button className="w-2/3 tracking-widest text-white uppercase text-lg my-2 h-16 rounded-lg bg-gradient" onClick={historyPop}>
        Remove
      </button>
    </div>
  );
};

export { HomeActions };
