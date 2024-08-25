import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Category } from "./Category";

describe("Category Component", () => {
  test("renders the category text", () => {
    const category = "Sports";
    render(<Category category={category} onClick={() => {}} />);

    const buttonElement = screen.getByRole("button", { name: /sports/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick when the button is clicked", () => {
    const category = "Technology";
    const handleClick = jest.fn();

    render(<Category category={category} onClick={handleClick} />);

    const buttonElement = screen.getByRole("button", { name: /technology/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
