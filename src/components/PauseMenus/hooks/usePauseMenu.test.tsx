import "@testing-library/jest-dom"; // Import jest-dom for extended matchers
import { render, fireEvent } from "@testing-library/react";
import React, { useEffect } from "react";
import { usePauseMenu } from "./usePauseMenu";

// Test component that uses the hook
const TestComponent = ({
  setCategory,
  setPage,
  setShow,
  resetGame,
}: {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setPage: (value: number) => void;
  setShow: (value: boolean) => void;
  resetGame: () => void;
}) => {
  const { handleNewCategory, handleQuitGame } = usePauseMenu(
    setCategory,
    setPage,
    setShow,
    resetGame
  );

  useEffect(() => {
    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event); // Trigger keydown on Escape for the test
  }, []);

  return (
    <div>
      <button onClick={handleNewCategory}>New Category</button>
      <button onClick={handleQuitGame}>Quit Game</button>
    </div>
  );
};

describe("usePauseMenu Hook", () => {
  const mockSetCategory = jest.fn();
  const mockSetPage = jest.fn();
  const mockSetShow = jest.fn();
  const mockResetGame = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("handles new category correctly", () => {
    const { getByText } = render(
      <TestComponent
        setCategory={mockSetCategory}
        setPage={mockSetPage}
        setShow={mockSetShow}
        resetGame={mockResetGame}
      />
    );

    fireEvent.click(getByText("New Category"));

    expect(mockSetCategory).toHaveBeenCalledWith("");
    expect(mockResetGame).toHaveBeenCalled();
    expect(mockSetPage).toHaveBeenCalledWith(2);
    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

  it("handles quit game correctly", () => {
    const { getByText } = render(
      <TestComponent
        setCategory={mockSetCategory}
        setPage={mockSetPage}
        setShow={mockSetShow}
        resetGame={mockResetGame}
      />
    );

    fireEvent.click(getByText("Quit Game"));

    expect(mockResetGame).toHaveBeenCalled();
    expect(mockSetPage).toHaveBeenCalledWith(0);
    expect(mockSetShow).toHaveBeenCalledWith(false);
  });

  it("closes the menu when Escape key is pressed", () => {
    render(
      <TestComponent
        setCategory={mockSetCategory}
        setPage={mockSetPage}
        setShow={mockSetShow}
        resetGame={mockResetGame}
      />
    );

    expect(mockSetShow).toHaveBeenCalledWith(false); // Escape should trigger setShow(false)
  });
});
