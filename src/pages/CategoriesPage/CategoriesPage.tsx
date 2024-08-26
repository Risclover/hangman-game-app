import React, { SetStateAction } from "react";
import { InfoPageContainer, Category } from "../../components";
import allData from "../../../data.json";

type Props = {
  title: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setCategory: React.Dispatch<SetStateAction<string>>;
  handleStartGame: (categoryName: string, word: string) => void;
  selectCategory: (category: string) => void;
  disabledCategories: string[];
};

export const CategoriesPage = ({
  title,
  setPage,
  selectCategory,
  disabledCategories,
}: Props) => {
  return (
    <InfoPageContainer title={title} setPage={setPage}>
      <div className="categories-container">
        {Object.keys(allData.categories).map((category) => (
          <Category
            disabled={disabledCategories.includes(category)}
            key={category}
            onClick={() => selectCategory(category)}
            category={category}
          />
        ))}
      </div>
    </InfoPageContainer>
  );
};
