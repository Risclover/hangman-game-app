import "./PauseMenu.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

type Props = {
  title: string;
  setShowPauseMenu: (value: boolean) => void;
  setPage: (value: number) => void;
  resetGame: () => void;
};

const PauseMenu = ({ setPage, title, setShowPauseMenu, resetGame }: Props) => {
  const handleNewCategory = () => {
    resetGame();
    setShowPauseMenu(false);
  };

  const handleQuitGame = () => {
    resetGame();
    setPage(0);
    setShowPauseMenu(false);
  };
  return (
    <div className="pause-menu">
      <div className="pause-menu-background"></div>
      <div className="pause-menu-foreground">
        <div className="pause-menu-main-container">
          <div className="pause-menu-box">
            <div className="pause-menu-title-container">
              <h1 className="pause-menu-title" data-text={title}>
                {title}
              </h1>
            </div>
            <div className="pause-menu-btns">
              <PrimaryBtn
                value={title === "Paused" ? "Continue" : "Play Again!"}
                onClick={() => setShowPauseMenu(false)}
              />
              <PrimaryBtn value="New Category" onClick={handleNewCategory} />
              <button
                className="primary-btn pause-menu-quit-btn"
                onClick={handleQuitGame}
              >
                Quit Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;
