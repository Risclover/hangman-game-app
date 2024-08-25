import React, { SetStateAction } from "react";
import { PrimaryBtn } from "../../components";
import "../../assets/styles/Homepage.css";
import { useHomepageLogic } from "./hooks/useHomepageLogic";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  page: number;
};

export const Homepage = ({ setPage, page }: Props) => {
  const { onClick, onPlayClick } = useHomepageLogic(setPage, page);
  return (
    <div className="homepage-container">
      <div className="homepage-main">
        <div className="hangman-logo">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div className="homepage-main-box">
          <div className="homepage-main-box-background"></div>
          <div className="homepage-main-box-foreground">
            <button className="play-button" onClick={onPlayClick}>
              <img src="/assets/images/icon-play.svg" alt="play-icon" />
            </button>
            <PrimaryBtn onClick={onClick} value="How to Play" />
          </div>
        </div>
      </div>
    </div>
  );
};
