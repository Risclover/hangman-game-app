import React, { SetStateAction, useEffect, MouseEvent } from "react";

export const useHomepageLogic = (
  setPage: React.Dispatch<SetStateAction<number>>,
  page: number
) => {
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

  return { onClick, onPlayClick };
};
