import React, { MouseEvent, SetStateAction, useEffect } from "react";
import { PrimaryBtn } from "../components";
import PlayIcon from "/assets/images/icon-play.svg";
import Logo from "/assets/images/logo.svg";
import "../assets/styles/Homepage.css";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  setImgLoaded: React.Dispatch<SetStateAction<boolean>>;
  setLogoLoaded: React.Dispatch<SetStateAction<boolean>>;
  page: number;
};

export const Homepage = ({
  setPage,
  setImgLoaded,
  setLogoLoaded,
  page,
}: Props) => {
  const handlePlay = () => {
    setPage(2);
  };

  const handleClick = () => {
    setPage(1);
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleClick();
  };

  const onPlayClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handlePlay();
  };

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement.tagName === "BUTTON") {
          activeElement.click();
        } else {
          if (page === 0) {
            handlePlay();
          }
        }
      }
    };

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [page]);

  return (
    <div className="homepage-container">
      <div className="homepage-main">
        <div className="hangman-logo">
          <img src={Logo} onLoad={() => setLogoLoaded(true)} />
        </div>
        <div className="homepage-main-box">
          <div className="homepage-main-box-background"></div>
          <div className="homepage-main-box-foreground">
            <button className="play-button" onClick={onPlayClick}>
              <img onLoad={() => setImgLoaded(true)} src={PlayIcon} />
            </button>
            <PrimaryBtn onClick={onClick} value="How to Play" />
          </div>
        </div>
      </div>
    </div>
  );
};
