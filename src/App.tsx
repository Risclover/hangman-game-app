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
  } = useGame();

  const [page, setPage] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isLoaded = imgLoaded && logoLoaded;

  const pages = [
    <Homepage
      setImgLoaded={setImgLoaded}
      setLogoLoaded={setLogoLoaded}
      setPage={setPage}
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
      {!isLoaded && <div className="spinner"></div>}
      {isLoaded && pages.map((item, idx) => page === idx && item)}
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
            />
          )
      )}
    </div>
  );
}

export default App;
