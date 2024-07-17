import Heart from "/assets/images/icon-heart.svg";
import Menu from "/assets/images/icon-menu.svg";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import "./GameBoardPageHeader.css";
import React, { SetStateAction } from "react";
import PlayerLivesMeter from "../PlayerLivesMeter/PlayerLivesMeter";

type Props = {
  category: string | null;
  setPage: React.Dispatch<SetStateAction<number>>;
  lives: number;
  setShowPauseMenu: React.Dispatch<SetStateAction<boolean>>;
};

const GameBoardPageHeader = ({
  category,
  setPage,
  lives,
  setShowPauseMenu,
}: Props) => {
  return (
    <div className="game-board-page-header">
      <div className="game-board-page-header-left">
        <PrimaryBtn
          setShowPauseMenu={setShowPauseMenu}
          icon={Menu}
          setPage={setPage}
        />
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
