import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CircleBtn } from "./CircleBtn";
import MenuIcon from "../../assets/images/icon-menu.svg"; // Import the same SVG in the test

describe("CircleBtn Component", () => {
  test("renders the button with the correct image src", () => {
    const value = "/assets/images/test-icon.svg";
    render(<CircleBtn value={value} onClick={() => {}} />);

    // Assert that the button renders with the correct image src
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", value);
  });

  test("calls onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    const value = "/assets/images/test-icon.svg";

    render(<CircleBtn value={value} onClick={handleClick} />);

    // Simulate a click on the button
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    // Assert that the onClick handler was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies 'centered' class when value equals MenuIcon path", () => {
    render(<CircleBtn value={MenuIcon} onClick={() => {}} />); // Use the imported MenuIcon

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("centered");
  });

  test("does not apply 'centered' class when value is not MenuIcon path", () => {
    const value = "/assets/images/another-icon.svg";
    render(<CircleBtn value={value} onClick={() => {}} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toHaveClass("centered");
  });
});
