import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CategoriesPage } from "./CategoriesPage";

jest.mock("../components", () => ({
  InfoPageContainer: jest.fn(({ children }) => <div>{children}</div>),
  Category: jest.fn(({ onClick, category }) => (
    <button onClick={onClick}>{category}</button>
  )),
}));

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

    fireEvent.click(screen.getByText("Animals"));

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

    expect(screen.getByText("Animals")).toBeInTheDocument();
  });
});
