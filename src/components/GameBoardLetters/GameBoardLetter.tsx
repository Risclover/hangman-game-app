import { useEffect, useState } from "react";

type Props = {
  letter: string;
  handleLetterClick: (letter: string) => void;
  guessedLetters: string[];
};

const GameBoardLetter = ({
  letter,
  handleLetterClick,
  guessedLetters,
}: Props) => {
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
