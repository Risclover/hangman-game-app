import { SetStateAction } from "react";
import { CircleBtn, PlayerLivesMeter } from "../../components";
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
  const menuIconUrl = "/hangman-game-app/src/assets/images/icon-menu.svg";
  const heartIconUrl = "/hangman-game-app/src/assets/images/icon-heart.svg";

  return (
    <div className="game-board-page-header">
      <div className="game-board-page-header-left">
        <CircleBtn onClick={() => setShowPauseMenu(true)} value={menuIconUrl} />
        <h1 className="category-title">{category}</h1>
      </div>
      <div className="game-board-page-header-right">
        <PlayerLivesMeter lives={lives} />
        <div className="heart-icon">
          <img src={heartIconUrl} alt="Heart Icon" />
        </div>
      </div>
    </div>
  );
};
