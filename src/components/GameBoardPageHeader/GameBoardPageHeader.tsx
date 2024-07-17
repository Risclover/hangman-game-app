import Heart from "/assets/images/icon-heart.svg";
import Menu from "/assets/images/icon-menu.svg";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import "./GameBoardPageHeader.css";
import React, { SetStateAction } from "react";
import PlayerLivesMeter from "../PlayerLivesMeter/PlayerLivesMeter";
import CircleBtn from "../CircleBtn/CircleBtn";

type Props = {
  category: string | null;
  lives: number;
  setShowPauseMenu: React.Dispatch<SetStateAction<boolean>>;
};

const GameBoardPageHeader = ({ category, lives, setShowPauseMenu }: Props) => {
  return (
    <div className="game-board-page-header">
      <div className="game-board-page-header-left">
        <CircleBtn onClick={() => setShowPauseMenu(true)} value={Menu} />
        <h1 className="category-title">{category}</h1>
      </div>
      <div className="game-board-page-header-right">
        <PlayerLivesMeter lives={lives} />
        <div className="heart-icon">
          <img src={Heart} />
        </div>
      </div>
    </div>
  );
};

export default GameBoardPageHeader;
