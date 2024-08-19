import React, { useEffect, useState } from "react";

export function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    console.log("innerWidth:", screenWidth);
  }, [screenWidth]);

  return { screenWidth };
}
