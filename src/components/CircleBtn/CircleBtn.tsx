import { MouseEventHandler } from "react";
import Menu from "/assets/images/icon-menu.svg";
import "./CircleBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CircleBtn = ({ value, onClick }: Props) => {
  return (
    <button
      className={`circle-btn${value === Menu ? " centered" : ""}`}
      onClick={onClick}
    >
      <img src={value} />
    </button>
  );
};

export default CircleBtn;
