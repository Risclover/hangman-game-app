import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GameBoardLetters } from "./GameBoardLetters";
import { alphabet } from "./data/alphabet"; // This is now a string

// Mock the GameBoardLetter component
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

    // Assert that all letters in the alphabet string are rendered as buttons
    Array.from(alphabet).forEach((letter) => {
      const letterButton = screen.getByRole("button", { name: letter });
      expect(letterButton).toBeInTheDocument();
    });

    // Check that the correct number of letters are rendered
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

    // Simulate clicking the first letter
    const firstLetter = alphabet[0];
    const firstLetterButton = screen.getByRole("button", { name: firstLetter });
    fireEvent.click(firstLetterButton);

    // Assert that handleLetterClick is called with the correct letter
    expect(mockHandleLetterClick).toHaveBeenCalledWith(firstLetter);
  });
});
