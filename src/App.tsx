import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import HowToPlayPage from "./pages/HowToPlayPage";
import CategoriesPage from "./pages/CategoriesPage";
import "./App.css";
import "./assets/variables.css";
import GameBoardPage from "./pages/GameBoardPage";

function App() {
  const [page, setPage] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [logoLoaded, setLogoLoaded] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(
    (imgLoaded && logoLoaded) || false
  );

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
    />,
    <GameBoardPage category={category} setPage={setPage} />,
  ];

  const handleLoad = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    let timer: number;
    timer = setTimeout(() => {
      handleLoad();
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log("isLoaded:", isLoaded);

  return (
    <div className="main-container">
      {!isLoaded && <div className="spinner"></div>}
      {isLoaded && pages.map((item, idx) => page === idx && item)}
    </div>
  );
}

export default App;
