import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CircleBtn } from "./CircleBtn";
import MenuIcon from "../../assets/images/icon-menu.svg";

describe("CircleBtn Component", () => {
  test("renders the button with the correct image src", () => {
    render(<CircleBtn value={MenuIcon} onClick={() => {}} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", MenuIcon);
  });

  test("calls onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<CircleBtn value={MenuIcon} onClick={handleClick} />);

    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies 'centered' class when value equals MenuIcon path", () => {
    render(<CircleBtn value={MenuIcon} onClick={() => {}} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("centered");
  });

  test("does not apply 'centered' class when value is not MenuIcon path", () => {
    render(<CircleBtn value={""} onClick={() => {}} />); // Use a different icon for this test

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toHaveClass("centered");
  });
});
