import React from "react";

type Props = {
  letter: string;
};

const GameBoardLetter = ({ letter }: Props) => {
  return <div className="game-board-letter-container">{letter}</div>;
};

export default GameBoardLetter;
