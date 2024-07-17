import React, { SetStateAction } from "react";
import "./PauseMenu.css";
import InfoPageTitle from "../InfoPageHeader/InfoPageTitle";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

type Props = {
  title: string;
  setShowPauseMenu: (value: boolean) => void;
  setPage: (value: number) => void;
  resetGame: () => void;
};

const PauseMenu = ({ setPage, title, setShowPauseMenu, resetGame }: Props) => {
  const handleNewCategory = () => {
    resetGame();
    setShowPauseMenu(false);
  };
  return (
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
            <PrimaryBtn
              value={title === "Paused" ? "Continue" : "Play Again!"}
              onClick={() => setShowPauseMenu(false)}
            />
            <PrimaryBtn value="New Category" onClick={handleNewCategory} />

            <div className="pause-menu-primary-btn">New Category</div>
            <div className="pause-menu-quit-btn">Quit Game</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;
