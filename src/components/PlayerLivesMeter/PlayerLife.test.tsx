import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { PlayerLife } from "./PlayerLife";

describe("PlayerLife", () => {
  it("renders with default className", () => {
    const { container } = render(<PlayerLife key={1} />);
    const lifeElement = container.querySelector(".player-life");
    expect(lifeElement).toBeInTheDocument();
    expect(lifeElement).toHaveClass("player-life");
  });

  it("renders with additional className if provided", () => {
    const { container } = render(<PlayerLife key={2} className="extra-life" />);
    const lifeElement = container.querySelector(".player-life.extra-life");
    expect(lifeElement).toBeInTheDocument();
    expect(lifeElement).toHaveClass("player-life extra-life");
  });
});
