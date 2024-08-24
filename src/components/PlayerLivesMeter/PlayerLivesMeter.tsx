import { usePlayerLivesMeter } from "./hooks/usePlayerLivesMeter";
import "./PlayerLivesMeter.css";

type Props = {
  lives: number;
};

export const PlayerLivesMeter = ({ lives }: Props) => {
  const { currentValue, maxValue } = usePlayerLivesMeter(lives);
  return (
    <div className="player-lives-meter">
      <progress value={currentValue} max={maxValue} className="progress-bar">
        {currentValue}/{maxValue}
      </progress>
    </div>
  );
};
