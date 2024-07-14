import React, { SetStateAction, useState } from "react";
import GameBoardPageHeader from "../components/GameBoardPageHeader/GameBoardPageHeader";

type Props = {
  category: string;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const GameBoardPage = ({ category, setPage }: Props) => {
  const [lives, setLives] = useState<number>(8);

  return (
    <div className="game-board-page-container">
      <GameBoardPageHeader
        setPage={setPage}
        category={category}
        lives={lives}
      />
    </div>
  );
};

export default GameBoardPage;
