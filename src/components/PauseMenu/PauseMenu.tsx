import "./PauseMenu.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import FocusTrap from "focus-trap-react";
import { LegacyRef, Ref, useRef } from "react";

type Props = {
  title: string;
  setShow: (value: boolean) => void;
  setPage: (value: number) => void;
  resetGame: () => void;
  handleStartGame: (categoryName: string, word: string) => void;
  handlePlayAgain: () => void;
  letterBtnRef: Ref<HTMLButtonElement>;
};

const PauseMenu = ({
  setPage,
  title,
  setShow,
  resetGame,
  handleStartGame,
  handlePlayAgain,
  letterBtnRef,
}: Props) => {
  const handleNewCategory = () => {
    resetGame();
    setShow(false);
  };

  const handleQuitGame = () => {
    resetGame();
    setPage(0);
    setShow(false);
  };

  return (
    <FocusTrap>
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
                      handlePlayAgain();
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

export default PauseMenu;
