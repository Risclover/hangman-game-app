import { SetStateAction } from "react";
import { GameBoardLetter } from "./GameBoardLetter";
import { alphabet } from "./data/alphabet";
import "./GameBoardLetters.css";

type Props = {
  setGuessedLetters: React.Dispatch<SetStateAction<string[]>>;
  guessedLetters: string[];
  handleLetterClick: (letter: string) => void;
};

export const GameBoardLetters = ({
  handleLetterClick,
  guessedLetters,
}: Props) => {
  return (
    <div className="game-board-letters-container">
      {Array.from(alphabet).map((letter) => (
        <GameBoardLetter
          guessedLetters={guessedLetters}
          key={letter}
          letter={letter}
          handleLetterClick={handleLetterClick}
        />
      ))}
    </div>
  );
};
