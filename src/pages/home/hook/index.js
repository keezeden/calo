import { useEffect, useState } from 'react';

const useHome = () => {
  const [kj, setKj] = useState(null);
  const [servings, setServings] = useState(null);

  const [currentCalories, setCurrentCalories] = useState(null);
  const [totalCalories, setTotalCalories] = useState(null);

  const [history, setHistory] = useState([]);

  const updateKj = e => setKj(e.target.value);
  const updateServings = e => setServings(e.target.value);

  useEffect(() => {
    const raw = (kj * servings) / 4.184; // kj to calories
    const rounded = Math.ceil(raw);
    setCurrentCalories(rounded);
  }, [kj, servings]);

  useEffect(() => {
    setTotalCalories(history.reduce((acc, cum) => acc + cum, 0));
  }, [history]);

  const historyPush = () => {
    setHistory(hist => [...hist, currentCalories]);
    setCurrentCalories(0);
  };

  const historyPop = () =>
    setHistory(hist => {
      const clone = [...hist];
      clone.pop();
      return clone;
    });

  return {
    kj,
    servings,
    totalCalories,
    updateKj,
    updateServings,
    historyPush,
    historyPop,
    currentCalories
  };
};

export { useHome };
