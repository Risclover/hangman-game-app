import React, { SetStateAction } from "react";
import InfoPage from "./InfoPage";
import Category from "../components/Category/Category";
import allData from "../../data.json";

type Props = {
  title: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setCategory: React.Dispatch<SetStateAction<string>>;
  handleStartGame: (categoryName: string, word: string) => void;
  selectCategory: (category: string) => void;
};

const CategoriesPage = ({ title, setPage, selectCategory }: Props) => {
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
