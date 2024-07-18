import { MouseEventHandler } from "react";
import { Icons } from "../../assets/images";
import "./CircleBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CircleBtn = ({ value, onClick }: Props) => {
  return (
    <button
      className={`circle-btn${value === Icons.MenuIcon ? " centered" : ""}`}
      onClick={onClick}
    >
      <img src={value} />
    </button>
  );
};
