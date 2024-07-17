import React, { useCallback, useEffect, useState } from "react";
import "./PlayerLivesMeter.css";

type Props = {
  lives: number;
};

const PlayerLivesMeter = ({ lives }: Props) => {
  const [currentValue, setCurrentValue] = useState(lives);

  const maxValue = 8;

  const decrement = useCallback(() => {
    setCurrentValue((v) => v - 1);
  }, [setCurrentValue]);

  useEffect(() => {
    if (currentValue !== lives) {
      decrement();
    }
  }, [lives, decrement, currentValue]);

  return (
    <div className="player-lives-meter">
      <progress value={currentValue} max={maxValue} className="progress-bar">
        {currentValue}
      </progress>
    </div>
  );
};

export default PlayerLivesMeter;
