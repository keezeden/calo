import React from 'react';

import { HomeInputs } from '../../components/home-inputs';
import { HomeDisplay } from '../../components/home-display';
import { HomeActions } from '../../components/home-actions';

import { useHome } from './hook';

const Home = () => {
  const { updateKj, updateServings, currentCalories, totalCalories, historyPush, historyPop } = useHome();

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center h-screen space-y-12">
        <HomeDisplay currentCalories={currentCalories} totalCalories={totalCalories} />
        <HomeInputs updateKj={updateKj} updateServings={updateServings} />
        <HomeActions historyPush={historyPush} historyPop={historyPop} />
      </div>
    </div>
  );
};

export { Home };
