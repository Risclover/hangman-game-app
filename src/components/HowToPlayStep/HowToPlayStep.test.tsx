import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HowToPlayStep } from "./HowToPlayStep";

describe("HowToPlayStep Component", () => {
  test("renders the step number correctly", () => {
    render(
      <HowToPlayStep number="1" title="Step 1" content="This is step 1." />
    );

    // Check that the step number is rendered
    const numberElement = screen.getByText("1");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass("how-to-play-step-number");
  });

  test("renders the step title correctly", () => {
    render(
      <HowToPlayStep number="2" title="Step 2" content="This is step 2." />
    );

    // Check that the step title is rendered
    const titleElement = screen.getByText("Step 2");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("how-to-play-step-title");
  });

  test("renders the step content correctly", () => {
    render(
      <HowToPlayStep number="3" title="Step 3" content="This is step 3." />
    );

    // Check that the step content is rendered
    const contentElement = screen.getByText("This is step 3.");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass("how-to-play-step-content");
  });
});
