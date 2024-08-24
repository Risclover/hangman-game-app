import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CategoriesPage } from "./CategoriesPage";

// Mock the components used in CategoriesPage
jest.mock("../components", () => ({
  InfoPageContainer: jest.fn(({ children }) => <div>{children}</div>),
  Category: jest.fn(({ onClick, category }) => (
    <button onClick={onClick}>{category}</button>
  )),
}));

// Mock the data.json
jest.mock("../../data.json", () => ({
  categories: {
    Animals: [{ name: "Elephant", selected: false }],
    Vehicles: [{ name: "Car", selected: false }],
    Sports: [{ name: "Soccer", selected: false }],
  },
}));

describe("CategoriesPage Component", () => {
  const mockSetPage = jest.fn();
  const mockSelectCategory = jest.fn();
  const mockSetCategory = jest.fn();
  const mockHandleStartGame = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the CategoriesPage with the correct categories", () => {
    render(
      <CategoriesPage
        title="Select a Category"
        setPage={mockSetPage}
        setCategory={mockSetCategory}
        handleStartGame={mockHandleStartGame}
        selectCategory={mockSelectCategory}
      />
    );

    // Check that the categories are rendered
    expect(screen.getByText("Animals")).toBeInTheDocument();
    expect(screen.getByText("Vehicles")).toBeInTheDocument();
    expect(screen.getByText("Sports")).toBeInTheDocument();
  });

  it("calls selectCategory with the correct category when clicked", () => {
    render(
      <CategoriesPage
        title="Select a Category"
        setPage={mockSetPage}
        setCategory={mockSetCategory}
        handleStartGame={mockHandleStartGame}
        selectCategory={mockSelectCategory}
      />
    );

    // Simulate clicking the "Animals" category
    fireEvent.click(screen.getByText("Animals"));

    // Check if selectCategory is called with "Animals"
    expect(mockSelectCategory).toHaveBeenCalledWith("Animals");
  });

  it("renders InfoPageContainer with the correct children", () => {
    render(
      <CategoriesPage
        title="Select a Category"
        setPage={mockSetPage}
        setCategory={mockSetCategory}
        handleStartGame={mockHandleStartGame}
        selectCategory={mockSelectCategory}
      />
    );

    // Check that InfoPageContainer is rendered and contains the category buttons
    expect(screen.getByText("Animals")).toBeInTheDocument(); // Ensures InfoPageContainer rendered its children
  });
});
