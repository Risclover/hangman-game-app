import FocusTrap from "focus-trap-react";
import { PrimaryBtn } from "../../components";
import "./PauseMenu.css";
import React, { SetStateAction, useEffect } from "react";

type Props = {
  title: string;
  setShow: (value: boolean) => void;
  setPage: (value: number) => void;
  setCategory: React.Dispatch<SetStateAction<string>>;
  resetGame: () => void;
  handleStartGame: (categoryName: string, word: string) => void;
};

export const PauseMenu = ({
  setCategory,
  setPage,
  title,
  setShow,
  resetGame,
}: Props) => {
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

  return (
    <FocusTrap focusTrapOptions={{ initialFocus: false }}>
      <div className="pause-menu">
        <div className="pause-menu-background"></div>
        <div className="pause-menu-foreground">
          <div className="pause-menu-main-container">
            <div className="pause-menu-box">
              <div className="pause-menu-title-container">
                <h1 className="pause-menu-title" data-text={title}>
                  {title}
                </h1>
              </div>
              <div className="pause-menu-btns">
                <PrimaryBtn
                  value={title === "Paused" ? "Continue" : "Play Again!"}
                  onClick={() => {
                    if (title !== "Paused") {
                      resetGame();
                    }
                    setShow(false);
                  }}
                />
                <PrimaryBtn value="New Category" onClick={handleNewCategory} />
                <button
                  className="primary-btn pause-menu-quit-btn"
                  onClick={handleQuitGame}
                >
                  Quit Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
};
