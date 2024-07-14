import React, { SetStateAction } from "react";
import InfoPage from "./InfoPage";
import Data from "../../data.json";
import Category from "../components/Category/Category";

type Props = {
  title: string;
  setPage: React.Dispatch<SetStateAction<number>>;
  setCategory: React.Dispatch<SetStateAction<string>>;
};

const CategoriesPage = ({ title, setPage, setCategory }: Props) => {
  console.log("Data:", Object.keys(Data.categories));
  return (
    <InfoPage title={title} setPage={setPage}>
      <div className="categories-container">
        {Object.keys(Data.categories).map((category) => (
          <Category
            categoryName={category}
            setCategory={setCategory}
            setPage={setPage}
          />
        ))}
      </div>
    </InfoPage>
  );
};

export default CategoriesPage;
