import React, { SetStateAction, useEffect, useRef, useState } from "react";
import GameBoardPageHeader from "../components/GameBoardPageHeader/GameBoardPageHeader";
import GameBoardLetters from "../components/GameBoardLetters/GameBoardLetters";
import formatDisplayWord from "../utils/formatDisplayWord";
import GameWord from "../components/GameWord/GameWord";
import PauseMenu from "../components/PauseMenu/PauseMenu";

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

const GameBoardPage = ({
  category,
  setPage,
  lives,
  setLives,
  guessedLetters,
  setGuessedLetters,
  resetGame,
  handleStartGame,
  setShowPauseMenu,
  gameWord,
  setShowWin,
  setShowLose,
}: Props) => {
  useEffect(() => {
    let currentWord = gameWord
      .toLowerCase()
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join("");

    if (!currentWord.includes("_")) {
      setShowWin(true);
    }
  }, [guessedLetters, gameWord, resetGame]);

  const handleLetterClick = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      const newGuessedLetters = [...guessedLetters, letter.toLowerCase()];
      setGuessedLetters(newGuessedLetters);
      if (!gameWord.toLowerCase().includes(letter)) {
        setLives((prev) => prev - 1);
      }
    }
  };

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

export default GameBoardPage;
