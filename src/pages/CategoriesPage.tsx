import React, { SetStateAction } from "react";
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

console.log("dataaa:", data);

type Props = {
  title: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setCategory: React.Dispatch<SetStateAction<string>>;
  handleStartGame: (categoryName: string, word: string) => void;
};

const CategoriesPage = ({
  title,
  setPage,
  setCategory,
  handleStartGame,
}: Props) => {
  const selectCategory = (category: string) => {
    setCategory(category);
    const items = data.categories[category];

    console.log("ITEMS:", items);
    const item = items[Math.floor(Math.random() * items.length)];
    console.log("ITEM:", item);
    handleStartGame(category, item.name);
    setPage((prev) => prev + 1);
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
