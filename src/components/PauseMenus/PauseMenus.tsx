import React from "react";
import { PauseMenu } from "./PauseMenu";

type PauseMenusProps = {
  showPauseMenu: boolean;
  showWin: boolean;
  showLose: boolean;
  setShowPauseMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowWin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLose: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  resetGame: () => void;
  handleStartGame: (categoryName: string, word: string) => void;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const PauseMenus: React.FC<PauseMenusProps> = ({
  showPauseMenu,
  showWin,
  showLose,
  setShowPauseMenu,
  setShowWin,
  setShowLose,
  setPage,
  resetGame,
  handleStartGame,
  setCategory,
}) => {
  const menus = [
    { show: showPauseMenu, title: "Paused", setShow: setShowPauseMenu },
    { show: showWin, title: "You Win", setShow: setShowWin },
    { show: showLose, title: "You Lose", setShow: setShowLose },
  ];

  return (
    <>
      {menus.map(
        (menu, idx) =>
          menu.show && (
            <PauseMenu
              showMenu={menu.show && true}
              key={idx}
              setPage={setPage}
              title={menu.title}
              setShow={menu.setShow}
              show={menu.show}
              resetGame={resetGame}
              handleStartGame={handleStartGame}
              setCategory={setCategory}
            />
          )
      )}
    </>
  );
};
