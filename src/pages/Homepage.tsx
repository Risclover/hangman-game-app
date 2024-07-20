import React, { SetStateAction, useEffect, useRef } from "react";
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
  const btnRef = useRef(null);
  const handlePlay = (e: any) => {
    e.preventDefault();
    setPage(2);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setPage(1);
  };

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const activeElement = document.activeElement as HTMLElement;
        // Check if the active element is a button
        if (activeElement.tagName === "BUTTON") {
          // If it's a button, perform the click action
          activeElement.click();
        } else {
          // Handle other cases as needed, for example:
          if (page === 0) {
            handlePlay(e);
          }
        }
      }
    };

    document.addEventListener("keydown", handleEnter);

    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [page]); // Including page in the dependency array if needed

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
            <PrimaryBtn onClick={handleClick} value="How to Play" />
          </div>
        </div>
      </div>
    </div>
  );
};
