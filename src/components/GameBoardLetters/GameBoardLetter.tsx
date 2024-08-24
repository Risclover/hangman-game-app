import { useGameBoardLetter } from "./hooks/useGameBoardLetter";

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
  const { disabled, btnRef, handleGuess } = useGameBoardLetter(
    handleLetterClick,
    letter,
    guessedLetters
  );

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
