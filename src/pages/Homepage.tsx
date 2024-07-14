import Logo from "/assets/images/logo.svg";
import PlayIcon from "/assets/images/icon-play.svg";
import "../assets/Homepage.css";
import React, { SetStateAction } from "react";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  setImgLoaded: React.Dispatch<SetStateAction<boolean>>;
  setLogoLoaded: React.Dispatch<SetStateAction<boolean>>;
};

const Homepage = ({ setPage, setImgLoaded, setLogoLoaded }: Props) => {
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
          <img src={Logo} onLoad={() => setLogoLoaded(true)} />
        </div>
        <div className="homepage-main-box">
          <div className="homepage-main-box-background"></div>
          <div className="homepage-main-box-foreground">
            <button className="play-button" onClick={handlePlay}>
              <img onLoad={() => setImgLoaded(true)} src={PlayIcon} />
            </button>
            <button className="how-to-play" onClick={handleClick}>
              <div className="how-to-play-hover-bg"></div>How To Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
