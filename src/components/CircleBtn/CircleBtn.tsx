import { MouseEventHandler } from "react";
import "./CircleBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CircleBtn = ({ value, onClick }: Props) => {
  // Assume "MenuIcon" refers to a specific string, which could be a filename or identifier
  const isMenuIcon =
    value === "/hangman-game-app/src/assets/images/icon-menu.svg";

  return (
    <button
      className={`circle-btn${isMenuIcon ? " centered" : ""}`}
      onClick={onClick}
    >
      <img src={value} alt="icon" />
    </button>
  );
};
