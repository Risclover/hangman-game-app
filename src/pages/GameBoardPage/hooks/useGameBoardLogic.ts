import React, { SetStateAction, useEffect } from "react";

export const useGameBoardLogic = (
  gameWord: string,
  guessedLetters: string[],
  setGuessedLetters: React.Dispatch<SetStateAction<string[]>>,
  setLives: React.Dispatch<SetStateAction<number>>
) => {
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

  return { handleLetterClick };
};
