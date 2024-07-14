import React, { SetStateAction, useState } from "react";
import GameBoardPageHeader from "../components/GameBoardPageHeader/GameBoardPageHeader";
import GameBoardLetters from "../components/GameBoardLetters/GameBoardLetters";

type Props = {
  category: string;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const GameBoardPage = ({ category, setPage }: Props) => {
  const [lives, setLives] = useState<number>(8);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([
    { letter: "A", guessed: true },
    { letter: "B", guessed: false },
  ]);

  return (
    <div className="game-board-page-container">
      <div className="game-board-page-background"></div>
      <div className="game-board-page-foreground">
        <GameBoardPageHeader
          setPage={setPage}
          category={category}
          lives={lives}
        />
        <GameBoardLetters />
      </div>
    </div>
  );
};

export default GameBoardPage;
