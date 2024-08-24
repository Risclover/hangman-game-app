import { GameWordLetter } from "./GameWordLetter";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useGameWord } from "./hooks/useGameWord";
import "./GameWord.css";

type Props = {
  displayWord: string;
  guessedLetters: string[];
};

export const GameWord = ({ displayWord, guessedLetters }: Props) => {
  const { screenWidth } = useScreenSize();
  const { word } = useGameWord(screenWidth, guessedLetters, displayWord);

  return (
    <div className="game-board">
      {word.map((line, lineIndex) => (
        <div className="game-board-line" key={`line-${lineIndex}`}>
          {line
            .split("")
            .map((item, charIndex) =>
              item !== " " ? (
                <GameWordLetter
                  value={item}
                  key={`char-${lineIndex}-${charIndex}`}
                />
              ) : (
                <div
                  className="space"
                  key={`space-${lineIndex}-${charIndex}`}
                />
              )
            )}
        </div>
      ))}
    </div>
  );
};
