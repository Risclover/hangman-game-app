import "@testing-library/jest-dom"; // Importing jest-dom for extended matchers
import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { useGameBoardLogic } from "./useGameBoardLogic";

// Test component for embedding the hook
const TestComponent = ({ gameWord }: { gameWord: string }) => {
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [lives, setLives] = useState(5);

  const { handleLetterClick } = useGameBoardLogic(
    gameWord,
    guessedLetters,
    setGuessedLetters,
    setLives
  );

  return (
    <div>
      <button onClick={() => handleLetterClick("e")}>Guess "e"</button>
      <button onClick={() => handleLetterClick("z")}>Guess "z"</button>
      <div data-testid="guessed-letters">
        Guessed Letters: {guessedLetters.join(", ")}
      </div>
      <div data-testid="lives">Lives: {lives}</div>
    </div>
  );
};

describe("useGameBoardLogic Hook", () => {
  it("should add a guessed letter and not decrease lives on a correct guess", () => {
    const { getByText, getByTestId } = render(
      <TestComponent gameWord="elephant" />
    );

    fireEvent.click(getByText('Guess "e"'));

    expect(getByTestId("guessed-letters")).toHaveTextContent(
      "Guessed Letters: e"
    );
    expect(getByTestId("lives")).toHaveTextContent("Lives: 5");
  });

  it("should decrease lives on an incorrect guess", () => {
    const { getByText, getByTestId } = render(
      <TestComponent gameWord="elephant" />
    );

    fireEvent.click(getByText('Guess "z"'));

    expect(getByTestId("guessed-letters")).toHaveTextContent(
      "Guessed Letters: z"
    );
    expect(getByTestId("lives")).toHaveTextContent("Lives: 4");
  });

  it("should handle keypress events and guess letters correctly", () => {
    const { getByTestId } = render(<TestComponent gameWord="elephant" />);

    fireEvent.keyDown(document, { key: "l" });

    expect(getByTestId("guessed-letters")).toHaveTextContent(
      "Guessed Letters: l"
    );
  });

  it("should handle incorrect keypress and decrease lives", () => {
    const { getByTestId } = render(<TestComponent gameWord="elephant" />);

    fireEvent.keyDown(document, { key: "x" });

    expect(getByTestId("guessed-letters")).toHaveTextContent(
      "Guessed Letters: x"
    );
    expect(getByTestId("lives")).toHaveTextContent("Lives: 4");
  });
});
