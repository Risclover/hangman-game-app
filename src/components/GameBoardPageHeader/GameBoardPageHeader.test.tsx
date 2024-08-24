import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GameBoardPageHeader } from "./GameBoardPageHeader";

// Mock the CircleBtn and PlayerLivesMeter components
jest.mock("../../components", () => ({
  CircleBtn: ({ onClick, value }: { onClick: () => void; value: string }) => (
    <button onClick={onClick}>{value}</button>
  ),
  PlayerLivesMeter: ({ lives }: { lives: number }) => (
    <div>{`Lives: ${lives}`}</div>
  ),
}));

describe("GameBoardPageHeader Component", () => {
  const mockSetShowPauseMenu = jest.fn();

  beforeEach(() => {
    mockSetShowPauseMenu.mockClear();
  });

  test("renders the header correctly", () => {
    render(
      <GameBoardPageHeader
        category="Animals"
        lives={3}
        setShowPauseMenu={mockSetShowPauseMenu}
      />
    );

    // Check that the category is rendered
    const categoryTitle = screen.getByText("Animals");
    expect(categoryTitle).toBeInTheDocument();

    // Check that the CircleBtn is rendered with the correct icon URL
    const circleBtn = screen.getByRole("button", {
      name: "/assets/images/icon-menu.svg",
    });
    expect(circleBtn).toBeInTheDocument();

    // Check that the PlayerLivesMeter is rendered with the correct lives count
    const livesMeter = screen.getByText("Lives: 3");
    expect(livesMeter).toBeInTheDocument();

    // Check that the heart icon is rendered with the correct image URL
    const heartIcon = screen.getByRole("img");
    expect(heartIcon).toHaveAttribute("src", "/assets/images/icon-heart.svg");
  });

  test("calls setShowPauseMenu when the menu button is clicked", () => {
    render(
      <GameBoardPageHeader
        category="Animals"
        lives={3}
        setShowPauseMenu={mockSetShowPauseMenu}
      />
    );

    // Simulate a click on the CircleBtn
    const circleBtn = screen.getByRole("button", {
      name: "/assets/images/icon-menu.svg",
    });
    fireEvent.click(circleBtn);

    // Assert that setShowPauseMenu is called with true
    expect(mockSetShowPauseMenu).toHaveBeenCalledWith(true);
    expect(mockSetShowPauseMenu).toHaveBeenCalledTimes(1);
  });
});
