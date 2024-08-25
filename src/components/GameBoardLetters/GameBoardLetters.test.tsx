import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GameBoardLetters } from "./GameBoardLetters";
import { alphabet } from "./data/alphabet";

jest.mock("./GameBoardLetter", () => ({
  GameBoardLetter: ({
    letter,
    handleLetterClick,
  }: {
    letter: string;
    handleLetterClick: (letter: string) => void;
  }) => <button onClick={() => handleLetterClick(letter)}>{letter}</button>,
}));

describe("GameBoardLetters Component", () => {
  const guessedLetters: string[] = [];
  const mockHandleLetterClick = jest.fn();

  beforeEach(() => {
    mockHandleLetterClick.mockClear();
  });

  test("renders a GameBoardLetter for each letter in the alphabet string", () => {
    render(
      <GameBoardLetters
        handleLetterClick={mockHandleLetterClick}
        guessedLetters={guessedLetters}
        setGuessedLetters={() => {}}
      />
    );

    Array.from(alphabet).forEach((letter) => {
      const letterButton = screen.getByRole("button", { name: letter });
      expect(letterButton).toBeInTheDocument();
    });

    expect(screen.getAllByRole("button").length).toBe(alphabet.length);
  });

  test("calls handleLetterClick when a letter is clicked", () => {
    render(
      <GameBoardLetters
        handleLetterClick={mockHandleLetterClick}
        guessedLetters={guessedLetters}
        setGuessedLetters={() => {}}
      />
    );

    const firstLetter = alphabet[0];
    const firstLetterButton = screen.getByRole("button", { name: firstLetter });
    fireEvent.click(firstLetterButton);

    expect(mockHandleLetterClick).toHaveBeenCalledWith(firstLetter);
  });
});
