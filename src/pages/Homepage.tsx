import React, { SetStateAction } from "react";
import { PrimaryBtn } from "../components";
import { Icons } from "../assets/images";
import "../assets/Homepage.css";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  setImgLoaded: React.Dispatch<SetStateAction<boolean>>;
  setLogoLoaded: React.Dispatch<SetStateAction<boolean>>;
};

export const Homepage = ({ setPage, setImgLoaded, setLogoLoaded }: Props) => {
  const handlePlay = (e: any) => {
    e.preventDefault();
    setPage(2);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-main">
        <div className="hangman-logo">
          <img src={Icons.Logo} onLoad={() => setLogoLoaded(true)} />
        </div>
        <div className="homepage-main-box">
          <div className="homepage-main-box-background"></div>
          <div className="homepage-main-box-foreground">
            <button className="play-button" onClick={handlePlay}>
              <img onLoad={() => setImgLoaded(true)} src={Icons.PlayIcon} />
            </button>
            <PrimaryBtn onClick={handleClick} value="How to Play" />
          </div>
        </div>
      </div>
    </div>
  );
};
