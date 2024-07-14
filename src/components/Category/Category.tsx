import React, { SetStateAction } from "react";
import "./Category.css";

type Props = {
  categoryName: string;
  setCategory: React.Dispatch<SetStateAction<string>>;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const Category = ({ categoryName, setCategory, setPage }: Props) => {
  const startGame = (e: any) => {
    e.preventDefault();
    setCategory(categoryName);
    setPage(3);
  };

  return (
    <button className="category-container" onClick={startGame}>
      {categoryName}
    </button>
  );
};

export default Category;
