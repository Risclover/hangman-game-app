import React, { SetStateAction } from "react";
import { PrimaryBtn } from "../../components";
import { useHomepageLogic } from "./hooks/useHomepageLogic";
import Logo from "../../assets/images/logo.svg";
import PlayIcon from "../../assets/images/icon-play.svg";
import "../../assets/styles/Homepage.css";

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
          <img src={Logo} alt="logo" />
        </div>
        <div className="homepage-main-box">
          <div className="homepage-main-box-background"></div>
          <div className="homepage-main-box-foreground">
            <button className="play-button" onClick={onPlayClick}>
              <img src={PlayIcon} alt="play-icon" />
            </button>
            <PrimaryBtn onClick={onClick} value="How to Play" />
          </div>
        </div>
      </div>
    </div>
  );
};
