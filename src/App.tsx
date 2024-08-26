import {
  Homepage,
  HowToPlayPage,
  CategoriesPage,
  GameBoardPage,
} from "./pages";
import { ErrorMessage, PauseMenus } from "./components";
import { useGame } from "./hooks/useGame";
import { useKeyPressHandler } from "./hooks/useKeyPressHandler";
import { usePageHandler } from "./hooks/usePageHandler";
import "./assets/styles/variables.css";
import "./App.css";

function App() {
  const [page, setPage] = usePageHandler(0);

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
    errorMessage,
    showErrorMessage,
    handleShowError,
  } = useGame(setPage);

  useKeyPressHandler({
    page,
    showWin,
    showLose,
    showPauseMenu,
    setShowPauseMenu,
    setPage,
    resetGame,
    errorMessage,
    handleShowError,
  });

  const pages = [
    <Homepage setPage={setPage} page={page} />,
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

  return (
    <main className="main-container">
      {showErrorMessage && (
        <ErrorMessage
          errorMessage={errorMessage}
          handleShowError={handleShowError}
        />
      )}
      {pages[page]}
      <PauseMenus
        showPauseMenu={showPauseMenu}
        showWin={showWin}
        showLose={showLose}
        setShowPauseMenu={setShowPauseMenu}
        setShowWin={setShowWin}
        setShowLose={setShowLose}
        setPage={setPage}
        resetGame={resetGame}
        handleStartGame={handleStartGame}
        setCategory={setCategory}
      />
    </main>
  );
}

export default App;
