import "@testing-library/jest-dom"; // Importing jest-dom for extended matchers
import { render, screen } from "@testing-library/react";
import { usePlayerLivesMeter } from "./usePlayerLivesMeter";

// Test component that uses the usePlayerLivesMeter hook
const TestPlayerLivesMeter = ({ lives }: { lives: number }) => {
  const { currentValue, maxValue } = usePlayerLivesMeter(lives);
  return (
    <div>
      <progress value={currentValue} max={maxValue}>
        {currentValue}/{maxValue}
      </progress>
    </div>
  );
};

describe("usePlayerLivesMeter Hook via Test Component", () => {
  it("initializes with the correct lives and max value", () => {
    render(<TestPlayerLivesMeter lives={5} />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("value", "5");
    expect(progressBar).toHaveAttribute("max", "8");
    expect(progressBar).toHaveTextContent("5/8");
  });

  it("updates the currentValue when lives change", () => {
    const { rerender } = render(<TestPlayerLivesMeter lives={5} />);

    let progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("value", "5");

    rerender(<TestPlayerLivesMeter lives={3} />);
    progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("value", "3");

    rerender(<TestPlayerLivesMeter lives={8} />);
    progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("value", "8");
  });
});
