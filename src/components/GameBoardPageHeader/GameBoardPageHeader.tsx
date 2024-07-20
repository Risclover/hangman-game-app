import React, { SetStateAction } from "react";
import { CircleBtn, PlayerLivesMeter } from "../../components";
import MenuIcon from "/assets/images/icon-menu.svg";
import HeartIcon from "/assets/images/icon-heart.svg";
import "./GameBoardPageHeader.css";

type Props = {
  category: string | null;
  lives: number;
  setShowPauseMenu: React.Dispatch<SetStateAction<boolean>>;
};

export const GameBoardPageHeader = ({
  category,
  lives,
  setShowPauseMenu,
}: Props) => {
  return (
    <div className="game-board-page-header">
      <div className="game-board-page-header-left">
        <CircleBtn onClick={() => setShowPauseMenu(true)} value={MenuIcon} />
        <h1 className="category-title">
          {category?.toLowerCase() === "guess the category (reverse)"
            ? "Guess the Category"
            : category}
        </h1>
      </div>
      <div className="game-board-page-header-right">
        <PlayerLivesMeter lives={lives} />
        <div className="heart-icon">
          <img src={HeartIcon} />
        </div>
      </div>
    </div>
  );
};
