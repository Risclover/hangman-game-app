import React from "react";

type Props = {
  letter: string;
  handleGuessLetter: Function;
};

const GameBoardLetter = ({ letter }: Props) => {
  return (
    <button className="game-board-letter-container">
      {letter}
    </button>
  );
};

export default GameBoardLetter;
