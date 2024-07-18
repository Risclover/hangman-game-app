import React, { SetStateAction } from "react";
import GameBoardLetter from "./GameBoardLetter";
import "./GameBoardLetters.css";

type Props = {
  setGuessedLetters: React.Dispatch<SetStateAction<string[]>>;
  guessedLetters: string[];
  handleLetterClick: (letter: string) => void;
};

const GameBoardLetters = ({ handleLetterClick, guessedLetters }: Props) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

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

export default GameBoardLetters;
