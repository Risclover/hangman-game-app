import "@testing-library/jest-dom"; // Importing jest-dom for extended matchers
import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryBtn } from "./PrimaryBtn";

describe("PrimaryBtn", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the button with correct value", () => {
    render(<PrimaryBtn value="Click Me" onClick={mockOnClick} />);

    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  it("calls the onClick handler when clicked", () => {
    render(<PrimaryBtn value="Click Me" onClick={mockOnClick} />);

    const buttonElement = screen.getByRole("button", { name: /Click Me/i });

    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with the correct class name", () => {
    render(<PrimaryBtn value="Click Me" onClick={mockOnClick} />);

    const buttonElement = screen.getByRole("button", { name: /Click Me/i });
    expect(buttonElement).toHaveClass("primary-btn");
  });
});
