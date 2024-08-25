import "@testing-library/jest-dom"; 
import { render, screen } from "@testing-library/react";
import { PlayerLivesMeter } from "./PlayerLivesMeter";

describe("PlayerLivesMeter", () => {
  it("renders the progress bar with correct initial values", () => {
    render(<PlayerLivesMeter lives={5} />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("value", "5");
    expect(progressBar).toHaveAttribute("max", "8");
    expect(progressBar).toHaveTextContent("5/8");
  });

  it("updates the progress bar when lives change", () => {
    const { rerender } = render(<PlayerLivesMeter lives={5} />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("value", "5");

    rerender(<PlayerLivesMeter lives={3} />);
    expect(progressBar).toHaveAttribute("value", "3");

    rerender(<PlayerLivesMeter lives={8} />);
    expect(progressBar).toHaveAttribute("value", "8");
  });
});
