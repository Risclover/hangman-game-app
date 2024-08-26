import React, { SetStateAction, useEffect } from "react";

export function useKeyPressHandler({
  page,
  showWin,
  showLose,
  showPauseMenu,
  setShowPauseMenu,
  setPage,
  resetGame,
  errorMessage,
  handleShowError,
}: {
  page: number;
  showWin: boolean;
  showLose: boolean;
  showPauseMenu: boolean;
  setShowPauseMenu: (value: boolean) => void;
  setPage: (page: number) => void;
  resetGame: () => void;
  errorMessage: string;
  handleShowError: () => void;
}) {
  useEffect(() => {
    const handleErrorKeyPress = (e: KeyboardEvent) => {
      if (errorMessage !== "") {
        if (e.key === "Escape" || e.key === "Enter") {
          handleShowError();
        }
      }
    };

    document.addEventListener("keydown", handleErrorKeyPress);

    return () => {
      document.removeEventListener("keydown", handleErrorKeyPress);
    };
  }, [errorMessage]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (page === 3) {
          if (!showWin && !showLose && !showPauseMenu) {
            setShowPauseMenu(true);
          } else {
            if (showWin || showLose) {
              resetGame();
            }
          }
        } else if (page === 2 || page === 1) {
          setPage(0);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    page,
    showWin,
    showLose,
    showPauseMenu,
    setShowPauseMenu,
    setPage,
    resetGame,
  ]);
}
