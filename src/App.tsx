import { useEffect, useRef, useState } from "react";
import Homepage from "./pages/Homepage";
import HowToPlayPage from "./pages/HowToPlayPage";
import CategoriesPage from "./pages/CategoriesPage";
import GameBoardPage from "./pages/GameBoardPage";
import PauseMenu from "./components/PauseMenu/PauseMenu";
import "./App.css";
import "./assets/variables.css";
import allData from "../data.json";

interface CategoryItem {
  name: string;
  selected: boolean;
}

interface Categories {
  [key: string]: CategoryItem[]; // Index signature
}

interface Data {
  categories: Categories;
}

const data: Data = allData as Data;

function App() {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [gameWord, setGameWord] = useState("");
  const [newGameWord, setNewGameWord] = useState("");
  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState("");
  const [logoLoaded, setLogoLoaded] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(
    (imgLoaded && logoLoaded) || false
  );
  const [showPauseMenu, setShowPauseMenu] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [lives, setLives] = useState(8);

  const resetGame = () => {
    setCategory("");
    setGuessedLetters([]);
    setGameWord("");
    setPage(2);
  };

  const handleStartGame = (categoryName: string, word: string) => {
    if (newGameWord !== "") {
      setGameWord(word);
      if (gameWord === newGameWord) {
      }
    }
    setCategory(categoryName);
    setGameWord(word);
    setLives(8);
  };

  const selectCategory = (category: string) => {
    setCategory(category);
    const items = data.categories[category];
    const item = items[Math.floor(Math.random() * items.length)];
    handleStartGame(category, item.name);
    setPage(3);
  };

  const handlePlayAgain = () => {
    setGuessedLetters([]);
    selectCategory(category);
  };

  useEffect(() => {
    if (lives === 0) {
      setShowLose(true);
    }
  }, [lives]);

  useEffect(() => {
    console.log("lives:", lives);
    console.log("gameWord:", gameWord);
    console.log("showWin:", showWin);
    console.log("showLose:", showLose);
    console.log("category:", category);
  }, [gameWord, category, lives]);

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

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const pauseMenus = [
    { show: showPauseMenu, title: "Paused", setShow: setShowPauseMenu },
    { show: showWin, title: "You Win", setShow: setShowWin },
    { show: showLose, title: "You Lose", setShow: setShowLose },
  ];

  useEffect(() => {
    console.log("showLose:", showLose);
  }, [showLose]);

  return (
    <div className="main-container">
      {!isLoaded && <div className="spinner"></div>}
      {isLoaded && pages.map((item, idx) => page === idx && item)}
      {pauseMenus.map(
        (menu) =>
          menu.show && (
            <PauseMenu
              setPage={setPage}
              title={menu.title}
              setShow={menu.setShow}
              resetGame={resetGame}
              handleStartGame={handleStartGame}
              handlePlayAgain={handlePlayAgain}
            />
          )
      )}
    </div>
  );
}

export default App;
