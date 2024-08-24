import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GameBoardLetter } from "./GameBoardLetter";

// Mock the useGameBoardLetter hook
jest.mock("./hooks/useGameBoardLetter", () => ({
  useGameBoardLetter: jest.fn(),
}));

describe("GameBoardLetter Component", () => {
  const mockUseGameBoardLetter =
    require("./hooks/useGameBoardLetter").useGameBoardLetter;

  beforeEach(() => {
    mockUseGameBoardLetter.mockClear();
  });

  test("renders the letter correctly", () => {
    // Mock the hook response
    mockUseGameBoardLetter.mockReturnValue({
      disabled: false,
      btnRef: { current: null },
      handleGuess: jest.fn(),
    });

    render(
      <GameBoardLetter
        letter="A"
        handleLetterClick={() => {}}
        guessedLetters={[]}
      />
    );

    // Check that the button renders the correct letter
    const buttonElement = screen.getByRole("button", { name: /a/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("A");
  });

  test("calls handleLetterClick when the button is clicked", () => {
    const mockHandleGuess = jest.fn();
    const mockHandleLetterClick = jest.fn();

    // Mock the hook response
    mockUseGameBoardLetter.mockReturnValue({
      disabled: false,
      btnRef: { current: null },
      handleGuess: mockHandleGuess,
    });

    render(
      <GameBoardLetter
        letter="B"
        handleLetterClick={mockHandleLetterClick}
        guessedLetters={[]}
      />
    );

    // Simulate a click on the button
    const buttonElement = screen.getByRole("button", { name: /b/i });
    fireEvent.click(buttonElement);

    // Assert that the handleGuess function was called
    expect(mockHandleGuess).toHaveBeenCalledTimes(1);
  });

  test("button is disabled based on the hook's return value", () => {
    // Mock the hook response with disabled set to true
    mockUseGameBoardLetter.mockReturnValue({
      disabled: true,
      btnRef: { current: null },
      handleGuess: jest.fn(),
    });

    render(
      <GameBoardLetter
        letter="C"
        handleLetterClick={() => {}}
        guessedLetters={[]}
      />
    );

    // Check that the button is disabled
    const buttonElement = screen.getByRole("button", { name: /c/i });
    expect(buttonElement).toBeDisabled();
  });

  test("button is not disabled based on the hook's return value", () => {
    // Mock the hook response with disabled set to false
    mockUseGameBoardLetter.mockReturnValue({
      disabled: false,
      btnRef: { current: null },
      handleGuess: jest.fn(),
    });

    render(
      <GameBoardLetter
        letter="D"
        handleLetterClick={() => {}}
        guessedLetters={[]}
      />
    );

    // Check that the button is not disabled
    const buttonElement = screen.getByRole("button", { name: /d/i });
    expect(buttonElement).not.toBeDisabled();
  });
});
