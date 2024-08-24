import { useEffect, useState } from "react";

export const usePlayerLivesMeter = (lives: number) => {
  const [currentValue, setCurrentValue] = useState(lives);
  const maxValue = 8;

  useEffect(() => {
    if (currentValue !== lives) {
      setCurrentValue(lives);
    }
  }, [lives, currentValue]);

  return { currentValue, maxValue };
};
