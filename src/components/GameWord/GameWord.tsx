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

  const word = formattedWordLines.map((line, index) => {
    const formattedLine = line
      .split("") // Split the line into individual characters
      .map((char) => {
        // Check if the character is a guessed letter or a space
        if (guessedLetters.includes(char.toLowerCase()) || char === " ") {
          return char; // Return the character itself if it's guessed or if it's a space
        } else {
          return "_"; // Otherwise, return an underscore for unguessed letters
        }
      })
      .join(""); // Join all characters back into a string

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

export default GameWord;
