import React, { SetStateAction, useEffect, useState } from "react";
import InfoPage from "./InfoPage";
import Category from "../components/Category/Category";
import allData from "../../data.json";

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

type Props = {
  title: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setCategory: React.Dispatch<SetStateAction<string>>;
  handleStartGame: (categoryName: string, word: string) => void;
  gameWord: string;
};

const CategoriesPage = ({
  title,
  setPage,
  setCategory,
  handleStartGame,
  gameWord,
}: Props) => {
  const [newWord, setNewWord] = useState("");

  useEffect(() => {
    if (gameWord === newWord) {
      const items = data.categories[category];
      const item = items[Math.floor(Math.random() * items.length)];
      setNewWord(item.name);
    } else {
      handleStartGame(newWord, item.name);
      setPage((prev) => prev + 1);
    }
  }, [gameWord, item]);

  const selectCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <InfoPage title={title} setPage={setPage}>
      <div className="categories-container">
        {Object.keys(allData.categories).map((category) => (
          <Category
            onClick={() => selectCategory(category)}
            category={category}
          />
        ))}
      </div>
    </InfoPage>
  );
};

export default CategoriesPage;
