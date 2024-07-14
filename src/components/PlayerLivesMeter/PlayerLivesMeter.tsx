import React from "react";
import "./PlayerLivesMeter.css";
import PlayerLife from "./PlayerLife";

type Props = {
  lives: number;
};

const PlayerLivesMeter = ({ lives }: Props) => {
  return (
    <div className="player-lives-meter">
      {Array.from(Array(lives)).map((life) => (
        <PlayerLife />
      ))}
    </div>
  );
};

export default PlayerLivesMeter;
