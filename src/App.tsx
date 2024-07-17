import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import HowToPlayPage from "./pages/HowToPlayPage";
import CategoriesPage from "./pages/CategoriesPage";
import "./App.css";
import "./assets/variables.css";
import GameBoardPage from "./pages/GameBoardPage";
import Data from "../data.json";
import PauseMenu from "./components/PauseMenu/PauseMenu";

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameWord, setGameWord] = useState("");
  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [logoLoaded, setLogoLoaded] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(
    (imgLoaded && logoLoaded) || false
  );
  const [showPauseMenu, setShowPauseMenu] = useState(false);

  const resetGame = () => {
    setCategory("");
    setGuessedLetters([]);
    setGameWord("");
    setPage(2);
  };

  const handleStartGame = (categoryName: string, word: string) => {
    setCategory(categoryName);
    setGameWord(word);
  };

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
    />,
  ];

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  console.log("isLoaded:", isLoaded);

  return (
    <div className="main-container">
      {!isLoaded && <div className="spinner"></div>}
      {isLoaded && pages.map((item, idx) => page === idx && item)}
      {showPauseMenu && <PauseMenu title="Paused" />}
    </div>
  );
}

export default App;
