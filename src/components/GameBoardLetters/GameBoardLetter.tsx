import { useState } from "react";

type Props = {
  letter: string;
  handleLetterClick: (letter: string) => void;
};

const GameBoardLetter = ({ letter, handleLetterClick }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const handleGuess = () => {
    setDisabled(true);
    handleLetterClick(letter);
  };

  return (
    <button
      className="game-board-letter-container"
      onClick={handleGuess}
      disabled={disabled}
    >
      {letter}
    </button>
  );
};

export default GameBoardLetter;
