import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { GameWordLetter } from "./GameWordLetter";

describe("GameWordLetter", () => {
  it("should render a letter if the value is not a space or underscore", () => {
    const { getByText } = render(<GameWordLetter value="A" />);
    expect(getByText("A")).toBeInTheDocument();
  });

  it("should render an empty div with class 'blank' if the value is an underscore", () => {
    const { container } = render(<GameWordLetter value="_" />);
    const blankDiv = container.querySelector(".blank");
    expect(blankDiv).toBeInTheDocument();
  });
});
