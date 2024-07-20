import { useEffect, useRef, useState } from "react";

interface Props {
  letter: string;
  handleLetterClick: (letter: string) => void;
  guessedLetters: string[];
}

export const GameBoardLetter = ({
  letter,
  handleLetterClick,
  guessedLetters,
}: Props) => {
  const [disabled, setDisabled] = useState(false);
  const btnRef = useRef<any>(null);

  const handleGuess = () => {
    btnRef?.current?.blur();
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
      ref={btnRef}
      className="game-board-letter-container"
      onClick={handleGuess}
      disabled={disabled}
    >
      {letter}
    </button>
  );
};
