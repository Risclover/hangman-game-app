import { formatDisplayWord } from "../../../utils";

export const useGameWord = (
  screenWidth: number,
  guessedLetters: string[],
  displayWord: string
) => {
  const formattedWordLines: string[] = formatDisplayWord(
    displayWord.toLowerCase(),
    screenWidth >= 1440 ? 10 : 7
  );

  const word = formattedWordLines.map((line) => {
    const formattedLine = line
      .split("")
      .map((char) => {
        if (guessedLetters.includes(char.toLowerCase()) || char === " ") {
          return char;
        } else {
          return "_";
        }
      })
      .join("");

    return formattedLine;
  });

  return { word };
};
