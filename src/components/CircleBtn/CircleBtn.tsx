import { MouseEventHandler } from "react";
import "./CircleBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CircleBtn = ({ value, onClick }: Props) => {
  return (
    <button className="circle-btn" onClick={onClick}>
      <img src={value} />
    </button>
  );
};

export default CircleBtn;
