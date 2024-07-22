import { useEffect, useState } from "react";
import {
  Homepage,
  HowToPlayPage,
  CategoriesPage,
  GameBoardPage,
} from "./pages";
import { PauseMenu } from "./components";
import { useGame } from "./hooks/useGame";
import "./assets/styles/variables.css";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isLoaded = imgLoaded && logoLoaded;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const {
    guessedLetters,
    setGuessedLetters,
    gameWord,
    category,
    setCategory,
    lives,
    setLives,
    showPauseMenu,
    setShowPauseMenu,
    showWin,
    setShowWin,
    showLose,
    setShowLose,
    resetGame,
    handleStartGame,
    selectCategory,
  } = useGame(handlePageChange);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (page === 3) {
          if (!showWin && !showLose && !showPauseMenu) {
            setShowPauseMenu(true);
          } else {
            if (showWin || showLose) {
              resetGame();
            }
          }
        } else if (page === 2 || page === 1) {
          setPage(0);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [page, showWin, showLose, showPauseMenu]);

  const pages = [
    <Homepage
      setImgLoaded={setImgLoaded}
      setLogoLoaded={setLogoLoaded}
      setPage={setPage}
      page={page}
    />,
    <HowToPlayPage setPage={setPage} title="How to Play" />,
    <CategoriesPage
      setPage={setPage}
      title="Pick a Category"
      setCategory={setCategory}
      handleStartGame={handleStartGame}
      selectCategory={selectCategory}
    />,
    <GameBoardPage
      category={category}
      setPage={setPage}
      guessedLetters={guessedLetters}
      setGuessedLetters={setGuessedLetters}
      resetGame={resetGame}
      handleStartGame={handleStartGame}
      gameWord={gameWord}
      setShowPauseMenu={setShowPauseMenu}
      setShowWin={setShowWin}
      setShowLose={setShowLose}
      lives={lives}
      setLives={setLives}
    />,
  ];

  useEffect(() => {
    if (!isLoaded) {
      // Additional loading actions if needed
    }
  }, [isLoaded]);

  return (
    <div className="main-container">
      {/* {!isLoaded && <div className="spinner"></div>} */}
      {pages.map((item, idx) => page === idx && item)}
      {[
        { show: showPauseMenu, title: "Paused", setShow: setShowPauseMenu },
        { show: showWin, title: "You Win", setShow: setShowWin },
        { show: showLose, title: "You Lose", setShow: setShowLose },
      ].map(
        (menu) =>
          menu.show && (
            <PauseMenu
              setPage={setPage}
              title={menu.title}
              setShow={menu.setShow}
              resetGame={resetGame}
              handleStartGame={handleStartGame}
              setCategory={setCategory}
            />
          )
      )}
    </div>
  );
}

export default App;
