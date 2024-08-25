import { jsx as _jsx } from "react/jsx-runtime";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { GameBoardPageHeader } from "./GameBoardPageHeader";
// Mock the CircleBtn and PlayerLivesMeter components
jest.mock("../../components", () => ({
    CircleBtn: ({ onClick, value }) => (_jsx("button", { onClick: onClick, children: value })),
    PlayerLivesMeter: ({ lives }) => (_jsx("div", { children: `Lives: ${lives}` })),
}));
describe("GameBoardPageHeader Component", () => {
    const mockSetShowPauseMenu = jest.fn();
    beforeEach(() => {
        mockSetShowPauseMenu.mockClear();
    });
    test("renders the header correctly", () => {
        render(_jsx(GameBoardPageHeader, { category: "Animals", lives: 3, setShowPauseMenu: mockSetShowPauseMenu }));
        // Check that the category is rendered
        const categoryTitle = screen.getByText("Animals");
        expect(categoryTitle).toBeInTheDocument();
        // Check that the CircleBtn is rendered with the correct mock value
        const circleBtn = screen.getByRole("button", { name: "test-file-stub" });
        expect(circleBtn).toBeInTheDocument();
        // Check that the PlayerLivesMeter is rendered with the correct lives count
        const livesMeter = screen.getByText("Lives: 3");
        expect(livesMeter).toBeInTheDocument();
        // Check that the heart icon is rendered
        const heartIcon = screen.getByRole("img", { name: "Heart Icon" });
        expect(heartIcon).toHaveAttribute("src", "test-file-stub");
    });
    test("calls setShowPauseMenu when the menu button is clicked", () => {
        render(_jsx(GameBoardPageHeader, { category: "Animals", lives: 3, setShowPauseMenu: mockSetShowPauseMenu }));
        // Simulate a click on the CircleBtn
        const circleBtn = screen.getByRole("button", { name: "test-file-stub" });
        fireEvent.click(circleBtn);
        // Assert that setShowPauseMenu is called with true
        expect(mockSetShowPauseMenu).toHaveBeenCalledWith(true);
        expect(mockSetShowPauseMenu).toHaveBeenCalledTimes(1);
    });
});
