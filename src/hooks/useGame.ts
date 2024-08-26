import React, { useState, useEffect, SetStateAction } from "react";
import allData from "../../data.json";

export const useGame = (handlePageChange: (newPage: number) => void) => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameWord, setGameWord] = useState("");
  const [category, setCategory] = useState("");
  const [lives, setLives] = useState(8);
  const [showPauseMenu, setShowPauseMenu] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [lastSelectedWord, setLastSelectedWord] = useState<string | null>(null);
  const [disabledCategories, setDisabledCategories] = useState<string[]>([]);

  const data = allData as {
    categories: { [key: string]: { name: string; selected: boolean }[] };
  };

  useEffect(() => {
    if (errorMessage !== "") {
      setShowErrorMessage(true);
    }
  }, [errorMessage]);

  const handleShowError = () => {
    setShowErrorMessage(false);
    setErrorMessage("");
    handlePageChange(2);
  };

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

    if (availableWords.length === 0) {
      setErrorMessage(
        "All words from this category have been played. Please choose a new category, or refresh the page to restart the word list."
      );
      return; // Stop execution if no words are available
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedItem = availableWords[randomIndex];

    handleStartGame(category, selectedItem.name);
    setLastSelectedWord(selectedItem.name);
    setErrorMessage(""); // Clear any previous error message
    handlePageChange(3);
  };

  useEffect(() => {
    console.log("errorMessage:", errorMessage);
  }, [errorMessage]);

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
    errorMessage,
    setErrorMessage,
    showErrorMessage,
    handleShowError,
    disabledCategories,
  };
};
