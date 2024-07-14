import React from "react";
import GameBoardLetter from "./GameBoardLetter";
import "./GameBoardLetters.css";

type Props = {};

const GameBoardLetters = (props: Props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const handleGuessLetter = () => {
    e.preventDefault();
  };

  return (
    <div className="game-board-letters-container">
      {Array.from(alphabet).map((letter) => (
        <GameBoardLetter
          letter={letter}
          handleGuessLetter={handleGuessLetter}
        />
      ))}
    </div>
  );
};

export default GameBoardLetters;
