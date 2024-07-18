import React, { useEffect, useState } from "react";
import "./PlayerLivesMeter.css";

type Props = {
  lives: number;
};

const PlayerLivesMeter = ({ lives }: Props) => {
  const [currentValue, setCurrentValue] = useState(lives);
  const maxValue = 8;

  useEffect(() => {
    // This will only update currentValue if lives changes and is different,
    // avoiding an update loop
    if (currentValue !== lives) {
      setCurrentValue(lives);
    }
  }, [lives, currentValue]);

  return (
    <div className="player-lives-meter">
      <progress value={currentValue} max={maxValue} className="progress-bar">
        {currentValue}/{maxValue}
      </progress>
    </div>
  );
};

export default PlayerLivesMeter;
