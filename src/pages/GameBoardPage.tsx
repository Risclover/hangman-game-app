import React, { SetStateAction, useEffect, useState } from "react";
import { GameBoardPageHeader, GameBoardLetters, GameWord } from "../components";

type Props = {
  category: string | null;
  setPage: React.Dispatch<SetStateAction<number>>;
  setGuessedLetters: React.Dispatch<SetStateAction<string[]>>;
  guessedLetters: string[];
  resetGame: () => void;
  handleStartGame: (categoryName: string, word: string) => void;
  gameWord: string;
  setShowPauseMenu: React.Dispatch<SetStateAction<boolean>>;
  setShowWin: React.Dispatch<SetStateAction<boolean>>;
  setShowLose: React.Dispatch<SetStateAction<boolean>>;
  lives: number;
  setLives: React.Dispatch<SetStateAction<number>>;
};

export const GameBoardPage = ({
  category,
  lives,
  setLives,
  guessedLetters,
  setGuessedLetters,
  setShowPauseMenu,
  gameWord,
}: Props) => {
  const handleLetterClick = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      const newGuessedLetters = [...guessedLetters, letter.toLowerCase()];
      setGuessedLetters(newGuessedLetters);
      if (!gameWord.toLowerCase().includes(letter)) {
        setLives((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.match(/^[a-z]$/i)) {
        handleLetterClick(e.key);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleLetterClick]);

  return (
    <div className="game-board-page-container">
      <div className="game-board-page-background"></div>
      <div className="game-board-page-foreground">
        <GameBoardPageHeader
          category={category}
          lives={lives}
          setShowPauseMenu={setShowPauseMenu}
        />
        <GameWord displayWord={gameWord} guessedLetters={guessedLetters} />
        <GameBoardLetters
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
          handleLetterClick={handleLetterClick}
        />
      </div>
    </div>
  );
};
