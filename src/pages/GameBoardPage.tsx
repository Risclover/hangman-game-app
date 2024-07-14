import React, { SetStateAction } from "react";
import GameBoardPageHeader from "../components/GameBoardPageHeader/GameBoardPageHeader";
import InfoPage from "./InfoPage";

type Props = {
  category: string;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const GameBoardPage = ({ category, setPage }: Props) => {
  return (
    <div className="game-board-page-container">
      <GameBoardPageHeader setPage={setPage} category={category} />
    </div>
  );
};

export default GameBoardPage;
