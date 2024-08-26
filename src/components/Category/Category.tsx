import { MouseEventHandler } from "react";
import "./Category.css";

type Props = {
  category: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

export const Category = ({ category, onClick, disabled }: Props) => {
  return (
    <button
      className="category-container"
      onClick={onClick}
      disabled={disabled}
    >
      {category}
    </button>
  );
};
