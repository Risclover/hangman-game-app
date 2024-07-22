// hooks/useGame.js
import { useState, useEffect } from "react";
import allData from "../../data.json";

export const useGame = (handlePageChange: (newPage: number) => void) => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameWord, setGameWord] = useState("");
  const [category, setCategory] = useState("");
  const [lives, setLives] = useState(8);
  const [showPauseMenu, setShowPauseMenu] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);

  const data = allData as {
    categories: { [key: string]: { name: string; selected: boolean }[] };
  };

  const resetGame = () => {
    setGuessedLetters([]);
    setGameWord("");
    setLives(8);
    setShowWin(false);
    setShowLose(false);

    if (category) {
      selectCategory(category);
    } else {
      handlePageChange(2);
    }
  };

  const handleStartGame = (categoryName: string, word: string) => {
    setCategory(categoryName);
    setGameWord(word);
    setLives(8);
    setShowWin(false);
    setShowLose(false);
  };

  const selectCategory = (category: string) => {
    const items = data.categories[category];
    const item = items[Math.floor(Math.random() * items.length)];
    handleStartGame(category, item.name);
    handlePageChange(3);
  };

  useEffect(() => {
    if (lives === 0) {
      setShowLose(true);
    }
  }, [lives]);

  useEffect(() => {
    let currentWord = gameWord
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (/[a-z]/i.test(letter)) {
          return guessedLetters.includes(letter) ? letter : "_";
        } else {
          return letter;
        }
      })
      .join("");

    if (gameWord !== "" && !currentWord.includes("_")) {
      setShowWin(true);
    }
  }, [guessedLetters, gameWord]);

  return {
    guessedLetters,
    setGuessedLetters,
    gameWord,
    category,
    setCategory,
    lives,
    setLives,
    showPauseMenu,
    setShowPauseMenu,
    showWin,
    setShowWin,
    showLose,
    setShowLose,
    resetGame,
    handleStartGame,
    selectCategory,
  };
};
