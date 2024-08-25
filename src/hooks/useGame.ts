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
  const [lastSelectedWord, setLastSelectedWord] = useState<string | null>(null);

  const data = allData as {
    categories: { [key: string]: { name: string; selected: boolean }[] };
  };

  useEffect(() => {});

  const resetGame = () => {
    setGuessedLetters([]);
    setGameWord("");
    setLives(8);
    setShowWin(false);
    setShowLose(false);

    if (category) {
      selectCategory(category);
      handlePageChange(3);
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

    const availableWords = items.filter(
      (item) => !item.selected && item.name !== lastSelectedWord
    );

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedItem = availableWords[randomIndex];

    handleStartGame(category, selectedItem.name);
    setLastSelectedWord(selectedItem.name);

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

      setCategory((prevCategory) => {
        const updatedItems = data.categories[prevCategory].map((item) =>
          item.name === gameWord ? { ...item, selected: true } : item
        );
        data.categories[prevCategory] = updatedItems;
        return prevCategory;
      });
    }
  }, [guessedLetters, gameWord, data.categories]);

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
