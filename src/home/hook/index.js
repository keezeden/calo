import { useEffect, useState } from 'react';

const useHome = () => {
  const [kj, setKj] = useState(null);
  const [servings, setServings] = useState(null);

  const [totalCalories, setTotalCalories] = useState(null);

  const updateKj = e => setKj(e.target.value);
  const updateServings = e => setServings(e.target.value);

  useEffect(() => {
    const raw = (kj * servings) / 4.184; // kj to calories
    const rounded = Math.ceil(raw);
    setTotalCalories(rounded);
  }, [kj, servings]);

  return { kj, servings, totalCalories, updateKj, updateServings };
};

export { useHome };
