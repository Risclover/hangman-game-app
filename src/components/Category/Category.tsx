import { MouseEventHandler } from "react";
import "./Category.css";

type Props = {
  category: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Category = ({ category, onClick }: Props) => {
  return (
    <button className="category-container" onClick={onClick}>
      {category}
    </button>
  );
};
