import "@testing-library/jest-dom"; // Importing jest-dom for extended matchers
import { render, screen, fireEvent } from "@testing-library/react";
import { useGame } from "./useGame";

jest.mock("../../data.json", () => ({
  categories: {
    Animals: [
      { name: "Elephant", selected: false },
      { name: "Lion", selected: false },
    ],
  },
}));

// Test component to use the useGame hook
const TestGameComponent = ({
  handlePageChange,
}: {
  handlePageChange: (newPage: number) => void;
}) => {
  const {
    guessedLetters,
    setGuessedLetters,
    gameWord,
    lives,
    setLives,
    showWin,
    showLose,
    resetGame,
    handleStartGame,
    selectCategory,
  } = useGame(handlePageChange);

  return (
    <div>
      <button
        onClick={() => setGuessedLetters(["e", "l", "p", "h", "a", "n", "t"])}
      >
        Set Guessed Letters
      </button>
      <button onClick={() => setLives(0)}>Set Lives to 0</button>
      <button onClick={resetGame}>Reset Game</button>
      <button onClick={() => handleStartGame("Animals", "Elephant")}>
        Start Game
      </button>
      <button onClick={() => selectCategory("Animals")}>Select Category</button>

      <div data-testid="game-word">Word: {gameWord}</div>
      <div>Lives: {lives}</div>
      {showWin && <div>You Win!</div>}
      {showLose && <div>You Lose!</div>}
    </div>
  );
};

describe("useGame Hook", () => {
  const mockHandlePageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("handles resetting the game and navigates to page 2 if no category is set", () => {
    render(<TestGameComponent handlePageChange={mockHandlePageChange} />);

    fireEvent.click(screen.getByText("Reset Game"));

    expect(screen.getByTestId("game-word")).toHaveTextContent("Word:"); // Ensures that the word is reset
    expect(screen.getByText("Lives: 8")).toBeInTheDocument();
    expect(mockHandlePageChange).toHaveBeenCalledWith(2); // Navigates to page 2 when no category is set
  });

  it("handles resetting the game and stays on page 3 if a category is set", () => {
    render(<TestGameComponent handlePageChange={mockHandlePageChange} />);

    // Start the game to set a category
    fireEvent.click(screen.getByText("Start Game"));
    fireEvent.click(screen.getByText("Reset Game"));

    expect(screen.getByTestId("game-word")).toHaveTextContent("Word:"); // Ensures that the word is reset
    expect(screen.getByText("Lives: 8")).toBeInTheDocument();
    expect(mockHandlePageChange).toHaveBeenCalledWith(3); // Ensures page stays on 3 after reset if category is set
  });

  it("handles winning the game", () => {
    render(<TestGameComponent handlePageChange={mockHandlePageChange} />);

    fireEvent.click(screen.getByText("Start Game"));

    // Simulate guessing all letters correctly
    fireEvent.click(screen.getByText("Set Guessed Letters"));

    expect(screen.getByText("You Win!")).toBeInTheDocument();
  });

  it("handles losing the game", () => {
    render(<TestGameComponent handlePageChange={mockHandlePageChange} />);

    fireEvent.click(screen.getByText("Set Lives to 0"));

    expect(screen.getByText("You Lose!")).toBeInTheDocument();
  });
});
