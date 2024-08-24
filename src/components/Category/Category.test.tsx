import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Category } from "./Category";

describe("Category Component", () => {
  test("renders the category text", () => {
    const category = "Sports";
    render(<Category category={category} onClick={() => {}} />);

    // Assert that the button is rendered with the correct category text
    const buttonElement = screen.getByRole("button", { name: /sports/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick when the button is clicked", () => {
    const category = "Technology";
    const handleClick = jest.fn(); // Mock function to track clicks

    render(<Category category={category} onClick={handleClick} />);

    // Find the button and simulate a click
    const buttonElement = screen.getByRole("button", { name: /technology/i });
    fireEvent.click(buttonElement);

    // Assert that the onClick handler was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
