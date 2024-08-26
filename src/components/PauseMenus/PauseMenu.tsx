import React, { SetStateAction } from "react";
import { PrimaryBtn } from "..";
import FocusTrap from "focus-trap-react";
import { usePauseMenu } from "./hooks/usePauseMenu";
import "./PauseMenu.css";

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
  const { handleNewCategory, handleQuitGame } = usePauseMenu(
    setCategory,
    setPage,
    setShow,
    resetGame
  );

  return (
    <FocusTrap focusTrapOptions={{ initialFocus: false }}>
      <nav className="pause-menu">
        <div className="pause-menu-background"></div>
        <div className="pause-menu-foreground">
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
      </nav>
    </FocusTrap>
  );
};
