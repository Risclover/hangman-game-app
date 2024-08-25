import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { InfoPageTitle } from "./InfoPageTitle";

describe("InfoPageTitle", () => {
  it("renders the title with the correct text", () => {
    render(<InfoPageTitle title="Test Title" />);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();

    expect(titleElement).toHaveAttribute("data-text", "Test Title");
  });
});
