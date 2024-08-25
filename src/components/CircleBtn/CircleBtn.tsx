import { MouseEventHandler } from "react";
import MenuIcon from "../../assets/images/icon-menu.svg";
import "./CircleBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CircleBtn = ({ value, onClick }: Props) => {
  return (
    <button
      className={`circle-btn${value === MenuIcon ? " centered" : ""}`}
      onClick={onClick}
    >
      <img src={value} alt="icon" />
    </button>
  );
};
