import { MouseEventHandler } from "react";
import "./CircleBtn.css";
import Menu from "/assets/images/icon-menu.svg";

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
