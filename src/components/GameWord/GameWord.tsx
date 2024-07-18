import { GameWordLetter } from "./GameWordLetter";
import { formatDisplayWord } from "../../utils";
import "./GameWord.css";

type Props = {
  displayWord: string;
  guessedLetters: string[];
};

export const GameWord = ({ displayWord, guessedLetters }: Props) => {
  const formattedWordLines: string[] = formatDisplayWord(
    displayWord.toLowerCase()
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

  return (
    <div className="game-board">
      {word.map((line) => (
        <div className="game-board-line">
          {line
            .split("")
            .map((item) =>
              item !== " " ? (
                <GameWordLetter value={item} />
              ) : (
                <div className="space"></div>
              )
            )}
        </div>
      ))}
    </div>
  );
};
