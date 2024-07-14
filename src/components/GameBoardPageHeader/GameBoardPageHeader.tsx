import Heart from "/assets/images/icon-heart.svg";
import Menu from "/assets/images/icon-menu.svg";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import "./GameBoardPageHeader.css";
import React, { SetStateAction } from "react";

type Props = {
  category: string;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const GameBoardPageHeader = ({ category, setPage }: Props) => {
  return (
    <div className="game-board-page-header">
      <div className="game-board-page-background"></div>
      <div className="game-board-page-foreground">
        <div className="game-board-page-header-left">
          <PrimaryBtn icon={Menu} setPage={setPage} />
          <h1 className="category-title">{category}</h1>
        </div>
        <div className="game-board-page-header-right">
          <div className="player-lives-bar"></div>
          <div className="heart-icon">
            <img src={Heart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoardPageHeader;
