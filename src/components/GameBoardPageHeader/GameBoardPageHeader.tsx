import React, { SetStateAction } from "react";
import { CircleBtn, PlayerLivesMeter } from "../../components";
import { Icons } from "../../assets/images";
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
        <CircleBtn
          onClick={() => setShowPauseMenu(true)}
          value={Icons.MenuIcon}
        />
        <h1 className="category-title">{category}</h1>
      </div>
      <div className="game-board-page-header-right">
        <PlayerLivesMeter lives={lives} />
        <div className="heart-icon">
          <img src={Icons.HeartIcon} />
        </div>
      </div>
    </div>
  );
};
