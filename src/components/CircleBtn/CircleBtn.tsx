import  { MouseEventHandler } from "react";
import MenuIcon from "../../assets/images/icon-menu.svg"; // Import the SVG correctly
import "./CircleBtn.css";

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CircleBtn = ({ value, onClick }: Props) => {
  return (
    <button
      className={`circle-btn${value === MenuIcon ? " centered" : ""}`} // Compare with the imported MenuIcon
      onClick={onClick}
    >
      <img src={value} alt="icon" />
    </button>
  );
};
