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
  const [reverseGameModeActive, setReverseGameModeActive] = useState(false);
  const [hintsList, setHintsList] = useState<string[]>([]);

  const data = allData as {
    categories: { [key: string]: { name: string; selected: boolean }[] };
  };

  const resetGame = () => {
    setGuessedLetters([]);
    setGameWord("");
    setHintsList([]);
    setLives(8);
    setShowWin(false);
    setShowLose(false);

    if (category) {
      selectCategory(category);
    } else {
      handlePageChange(2);
    }
  };

  useEffect(() => {
    console.log("showPauseMenu:", showPauseMenu);
    console.log("showWin:", showWin);
    console.log("showLose:", showLose);
  }, [showPauseMenu, showWin, showLose]);

  const handleStartGame = (categoryName: string, word: string) => {
    setCategory(categoryName);
    setGameWord(word);
    setLives(8);
    setShowWin(false);
    setShowLose(false);
  };

  const getHints = (item: {
    name: string;
    hints?: string[];
    selected: boolean;
  }) => {
    return item.hints;
  };

  const selectCategory = (category: string) => {
    const items = data.categories[category];
    const item = items[Math.floor(Math.random() * items.length)];
    let hints = getHints(item);

    if (hints && category.toLowerCase() === "guess the category (reverse)") {
      setHintsList(hints);
    }

    console.log("hints:", hints);

    handleStartGame(category, item.name);
    handlePageChange(3);
  };

  useEffect(() => {
    console.log("HITNS LIST:", hintsList);
  }, [hintsList]);

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
        // Check if the character is a letter; if so, handle guessing logic.
        // If the character is not a letter (e.g., space or punctuation), just return the character.
        if (/[a-z]/i.test(letter)) {
          return guessedLetters.includes(letter) ? letter : "_";
        } else {
          return letter; // This will ensure spaces and punctuation are not replaced by "_"
        }
      })
      .join("");

    // Check for win condition: no underscores should be present in the `currentWord`
    // that are part of the guessed segment (ignores spaces and punctuation as they are returned as is).
    if (gameWord !== "" && !currentWord.includes("_")) {
      setShowWin(true);
    }

    console.log("currentWord:", currentWord); // This should show the correct formation like "the office" when guessed right.
  }, [guessedLetters, gameWord]); // Removed resetGame from dependencies if it's not used within the effect.

  useEffect(() => {
    if (category && category.toLowerCase() === "guess the category (reverse)") {
      setReverseGameModeActive(true);
    } else {
      setReverseGameModeActive(false);
    }
  }, [category]);

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
    reverseGameModeActive,
    hintsList,
  };
};
