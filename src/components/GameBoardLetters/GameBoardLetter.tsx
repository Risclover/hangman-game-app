import { FC, useEffect, useState } from "react";

interface Props {
  letter: string;
  handleLetterClick: (letter: string) => void;
  guessedLetters: string[];
}

const GameBoardLetter: FC<Props> = ({
  letter,
  handleLetterClick,
  guessedLetters,
}) => {
  const [disabled, setDisabled] = useState(false);

  const handleGuess = () => {
    handleLetterClick(letter);
  };

  useEffect(() => {
    if (guessedLetters.includes(letter)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [guessedLetters]);

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
