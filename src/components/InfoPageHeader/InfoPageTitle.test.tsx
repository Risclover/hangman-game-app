import "@testing-library/jest-dom"; // Importing jest-dom for extended matchers
import { render, screen } from "@testing-library/react";
import { InfoPageTitle } from "./InfoPageTitle";

describe("InfoPageTitle", () => {
  it("renders the title with the correct text", () => {
    render(<InfoPageTitle title="Test Title" />);

    // Check if the title text is rendered
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();

    // Check if the data-text attribute is set correctly
    expect(titleElement).toHaveAttribute("data-text", "Test Title");
  });
});
