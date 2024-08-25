import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { PauseMenu } from "./PauseMenu";
import { usePauseMenu } from "./hooks/usePauseMenu";

jest.mock("focus-trap-react", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("../../components", () => ({
  PrimaryBtn: jest.fn(({ value, onClick }) => (
    <button onClick={onClick}>{value}</button>
  )),
}));

jest.mock("./hooks/usePauseMenu", () => ({
  usePauseMenu: jest.fn(),
}));

describe("PauseMenu", () => {
  const mockSetShow = jest.fn();
  const mockSetPage = jest.fn();
  const mockSetCategory = jest.fn();
  const mockResetGame = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (usePauseMenu as jest.Mock).mockReturnValue({
      handleNewCategory: jest.fn(),
      handleQuitGame: jest.fn(),
    });
  });

  it("renders the PauseMenu with buttons", () => {
    render(
      <PauseMenu
        title="Paused"
        setCategory={mockSetCategory}
        setPage={mockSetPage}
        setShow={mockSetShow}
        resetGame={mockResetGame}
        handleStartGame={jest.fn()}
      />
    );

    expect(screen.getByText("Paused")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
    expect(screen.getByText("New Category")).toBeInTheDocument();
    expect(screen.getByText("Quit Game")).toBeInTheDocument();
  });

  it("calls appropriate functions on button clicks", () => {
    const mockHandleNewCategory = jest.fn();
    const mockHandleQuitGame = jest.fn();

    (usePauseMenu as jest.Mock).mockReturnValue({
      handleNewCategory: mockHandleNewCategory,
      handleQuitGame: mockHandleQuitGame,
    });

    render(
      <PauseMenu
        title="Paused"
        setCategory={mockSetCategory}
        setPage={mockSetPage}
        setShow={mockSetShow}
        resetGame={mockResetGame}
        handleStartGame={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Continue"));
    expect(mockSetShow).toHaveBeenCalledWith(false);

    fireEvent.click(screen.getByText("New Category"));
    expect(mockHandleNewCategory).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Quit Game"));
    expect(mockHandleQuitGame).toHaveBeenCalled();
  });

  it("resets the game and hides the menu when the 'Play Again!' button is clicked", () => {
    render(
      <PauseMenu
        title="Game Over"
        setCategory={mockSetCategory}
        setPage={mockSetPage}
        setShow={mockSetShow}
        resetGame={mockResetGame}
        handleStartGame={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Play Again!"));
    expect(mockResetGame).toHaveBeenCalled();
    expect(mockSetShow).toHaveBeenCalledWith(false);
  });
});
