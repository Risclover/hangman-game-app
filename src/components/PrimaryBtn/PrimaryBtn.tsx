import React, { SetStateAction } from "react";
import "./PrimaryBtn.css";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  icon: string;
};

const PrimaryBtn = ({ icon, setPage }: Props) => {
  return (
    <button
      className={`${
        icon === "/assets/images/icon-back.svg"
          ? "primary-btn"
          : "primary-btn centered"
      }`}
      onClick={() => setPage(0)}
    >
      <img src={icon} />
    </button>
  );
};

export default PrimaryBtn;
