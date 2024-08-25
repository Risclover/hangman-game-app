import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useGameWord } from "./useGameWord";
import { formatDisplayWord } from "../../../utils";

jest.mock("../../../utils", () => ({
  formatDisplayWord: jest.fn(),
}));

interface TestComponentProps {
  screenWidth: number;
  guessedLetters: string[];
  displayWord: string;
}

const TestComponent: React.FC<TestComponentProps> = ({
  screenWidth,
  guessedLetters,
  displayWord,
}) => {
  const { word } = useGameWord(screenWidth, guessedLetters, displayWord);
  return (
    <div>
      {word.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

describe("useGameWord", () => {
  it("should return correctly formatted word with hidden letters", () => {
    const mockedFormatDisplayWord = formatDisplayWord as jest.MockedFunction<
      typeof formatDisplayWord
    >;
    mockedFormatDisplayWord.mockReturnValue(["word", "test"]);

    const { getByText } = render(
      <TestComponent
        screenWidth={1440}
        guessedLetters={["w", "o", "t"]}
        displayWord="word test"
      />
    );

    expect(getByText("wo__")).toBeInTheDocument();
    expect(getByText("t__t")).toBeInTheDocument();
  });

  it("should use smaller line size for screenWidth < 1440", () => {
    const mockedFormatDisplayWord = formatDisplayWord as jest.MockedFunction<
      typeof formatDisplayWord
    >;
    mockedFormatDisplayWord.mockReturnValue(["word", "test"]);

    render(
      <TestComponent
        screenWidth={1200}
        guessedLetters={["w", "o", "t"]}
        displayWord="word test"
      />
    );

    expect(mockedFormatDisplayWord).toHaveBeenCalledWith("word test", 7);
  });
});
