import { MouseEventHandler } from "react";
import "./PrimaryBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const PrimaryBtn = ({ value, onClick }: Props) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      {value}
    </button>
  );
};
