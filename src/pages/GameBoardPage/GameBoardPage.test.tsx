import "@testing-library/jest-dom"; 
import { render, screen } from "@testing-library/react";
import { GameBoardPage } from "./GameBoardPage";

// Mock child components
jest.mock("../../components", () => ({
  GameBoardPageHeader: jest.fn(() => <div>Mock Header</div>),
  GameBoardLetters: jest.fn(() => <div>Mock Letters</div>),
  GameWord: jest.fn(() => <div>Mock Game Word</div>),
}));

describe("GameBoardPage Component", () => {
  const mockSetGuessedLetters = jest.fn();
  const mockSetLives = jest.fn();
  const mockSetShowPauseMenu = jest.fn();
  const mockSetPage = jest.fn();
  const mockResetGame = jest.fn();
  const mockHandleStartGame = jest.fn();
  const mockSetShowWin = jest.fn();
  const mockSetShowLose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders GameBoardPage with header, word, and letters components", () => {
    render(
      <GameBoardPage
        category="Animals"
        lives={5}
        setGuessedLetters={mockSetGuessedLetters}
        setShowPauseMenu={mockSetShowPauseMenu}
        gameWord="elephant"
        guessedLetters={["e", "l"]}
        setLives={mockSetLives}
        setPage={mockSetPage}
        resetGame={mockResetGame}
        handleStartGame={mockHandleStartGame}
        setShowWin={mockSetShowWin}
        setShowLose={mockSetShowLose}
      />
    );

    // Check if the mocked components are rendered
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
    expect(screen.getByText("Mock Game Word")).toBeInTheDocument();
    expect(screen.getByText("Mock Letters")).toBeInTheDocument();
  });
});
