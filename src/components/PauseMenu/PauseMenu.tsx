import React from "react";
import "./PauseMenu.css";
import InfoPageTitle from "../InfoPageHeader/InfoPageTitle";

type Props = {
  title: string;
};

const PauseMenu = ({ title }: Props) => {
  return (
    <div className="pause-menu">
      <div className="pause-menu-background"></div>
      <div className="pause-menu-foreground">
        <div className="pause-menu-main-container">
          <div className="pause-menu-box">
            <div className="pause-menu-title-container">
              <h1 className="pause-menu-title" data-text={title}>
                {title}
              </h1>
            </div>
            <div className="pause-menu-primary-btn">
              {title === "Paused" ? "Continue" : "Play Again!"}
            </div>
            <div className="pause-menu-primary-btn">New Category</div>
            <div className="pause-menu-quit-btn">Quit Game</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;
