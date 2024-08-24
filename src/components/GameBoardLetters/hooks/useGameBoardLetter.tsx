import { useEffect, useRef, useState } from "react";

export const useGameBoardLetter = (
  handleLetterClick: (letter: string) => void,
  letter: string,
  guessedLetters: string[]
) => {
  const [disabled, setDisabled] = useState(false);
  const btnRef = useRef<any>(null);

  const handleGuess = () => {
    btnRef?.current?.blur();
    handleLetterClick(letter);
  };

  useEffect(() => {
    if (guessedLetters.includes(letter)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [guessedLetters]);

  return { disabled, btnRef, handleGuess };
};
