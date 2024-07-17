import React, { useRef, useState } from "react";
import formatDisplayWord from "../../utils/formatDisplayWord";
import GameWordLetter from "./GameWordLetter";
import "./GameWord.css";

type Props = {
  displayWord: string;
  guessedLetters: string[];
};

const GameWord = ({ displayWord, guessedLetters }: Props) => {
  const letterRef = useRef<any>(null);

  const formattedWordLines: string[] = formatDisplayWord(
    displayWord.toLowerCase()
  );

  const word = formattedWordLines.map((line, index) =>
    line
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join("")
  );

  console.log("word:", word);

  return (
    <div className="game-board">
      {word.map((line) => (
        <div className="game-board-line">
          {line.split("").map((item) => (
            <GameWordLetter value={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameWord;
