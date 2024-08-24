import React, { SetStateAction, useEffect } from "react";

export const usePauseMenu = (
  setCategory: React.Dispatch<SetStateAction<string>>,
  setPage: (value: number) => void,
  setShow: (value: boolean) => void,
  resetGame: () => void
) => {
  const handleNewCategory = () => {
    setCategory("");
    resetGame();
    setPage(2);
    setShow(false);
  };

  const handleQuitGame = () => {
    resetGame();
    setPage(0);
    setShow(false);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return { handleNewCategory, handleQuitGame };
};
