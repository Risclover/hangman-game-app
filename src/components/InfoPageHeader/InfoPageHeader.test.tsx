import "@testing-library/jest-dom"; // Importing jest-dom for extended matchers
import { render, screen, fireEvent } from "@testing-library/react";
import { InfoPageHeader } from "./InfoPageHeader";
import { CircleBtn, InfoPageTitle } from "../../components";

// Mock the CircleBtn and InfoPageTitle components
jest.mock("../../components", () => ({
  CircleBtn: jest.fn(({ onClick }) => (
    <button onClick={onClick} aria-label="Back Button">
      Mocked CircleBtn
    </button>
  )),
  InfoPageTitle: jest.fn(({ title }) => <h1>{title}</h1>),
}));

describe("InfoPageHeader", () => {
  const mockSetPage = jest.fn();

  it("renders the header with the title and CircleBtn", () => {
    render(<InfoPageHeader setPage={mockSetPage} title="Test Title" />);

    // Check if CircleBtn and InfoPageTitle are rendered
    expect(CircleBtn).toHaveBeenCalledWith(
      {
        onClick: expect.any(Function),
        value: "/hangman-game-app/src/assets/images/icon-back.svg",
      },
      {}
    );
    expect(InfoPageTitle).toHaveBeenCalledWith({ title: "Test Title" }, {});

    // Check if the button and title text are in the document
    expect(
      screen.getByRole("button", { name: /Back Button/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("calls setPage with 0 when CircleBtn is clicked", () => {
    render(<InfoPageHeader setPage={mockSetPage} title="Test Title" />);

    // Simulate button click
    fireEvent.click(screen.getByRole("button", { name: /Back Button/i }));

    // Expect setPage to be called with 0
    expect(mockSetPage).toHaveBeenCalledWith(0);
  });
});
