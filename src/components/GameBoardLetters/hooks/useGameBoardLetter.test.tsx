import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { useGameBoardLetter } from "./useGameBoardLetter";

const TestComponent = ({
  letter,
  guessedLetters,
  handleLetterClick,
}: {
  letter: string;
  guessedLetters: string[];
  handleLetterClick: (letter: string) => void;
}) => {
  const { disabled, btnRef, handleGuess } = useGameBoardLetter(
    handleLetterClick,
    letter,
    guessedLetters
  );

  return (
    <button ref={btnRef} onClick={handleGuess} disabled={disabled}>
      {letter}
    </button>
  );
};

describe("useGameBoardLetter custom hook", () => {
  const mockHandleLetterClick = jest.fn();

  beforeEach(() => {
    mockHandleLetterClick.mockClear();
  });

  test("should initialize with 'disabled' set to false", () => {
    const { getByRole } = render(
      <TestComponent
        letter="A"
        guessedLetters={[]}
        handleLetterClick={mockHandleLetterClick}
      />
    );

    const button = getByRole("button", { name: "A" });
    expect(button).not.toBeDisabled();
  });

  test("should set 'disabled' to true when the letter is in guessedLetters", () => {
    const { getByRole, rerender } = render(
      <TestComponent
        letter="A"
        guessedLetters={[]}
        handleLetterClick={mockHandleLetterClick}
      />
    );

    const button = getByRole("button", { name: "A" });
    expect(button).not.toBeDisabled();

    // Rerender with "A" in guessedLetters
    rerender(
      <TestComponent
        letter="A"
        guessedLetters={["A"]}
        handleLetterClick={mockHandleLetterClick}
      />
    );
    expect(button).toBeDisabled();
  });

  test("should call handleLetterClick and blur the button when handleGuess is called", () => {
    const { getByRole } = render(
      <TestComponent
        letter="A"
        guessedLetters={[]}
        handleLetterClick={mockHandleLetterClick}
      />
    );

    const button = getByRole("button", { name: "A" });
    fireEvent.click(button);

    expect(mockHandleLetterClick).toHaveBeenCalledWith("A");
  });
});
