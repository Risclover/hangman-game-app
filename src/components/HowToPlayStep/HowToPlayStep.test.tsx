import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HowToPlayStep } from "./HowToPlayStep";

type HowToPlayStepProps = {
  id: string;
  number: string;
  title: string;
  content: string;
};

describe("HowToPlayStep Component", () => {
  const renderComponent = (propsOverrides: Partial<HowToPlayStepProps>) => {
    const defaultProps: HowToPlayStepProps = {
      id: "default-id",
      number: "0",
      title: "Default Title",
      content: "Default content.",
    };
    return render(<HowToPlayStep {...defaultProps} {...propsOverrides} />);
  };

  test("renders the step number correctly with given number", () => {
    renderComponent({
      id: "step1",
      number: "1",
      title: "Step 1",
      content: "This is step 1.",
    });
    const numberElement = screen.getByText("1");
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass("how-to-play-step-number");
  });

  test("renders the step title correctly with given title", () => {
    renderComponent({
      id: "step2",
      number: "2",
      title: "Step 2",
      content: "This is step 2.",
    });
    const titleElement = screen.getByText("Step 2");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("how-to-play-step-title");
  });

  test("renders the step content correctly with given content", () => {
    renderComponent({
      id: "step3",
      number: "3",
      title: "Step 3",
      content: "This is step 3.",
    });
    const contentElement = screen.getByText("This is step 3.");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass("how-to-play-step-content");
  });

  test("assigns the correct id to the container", () => {
    const customId = "step4";
    renderComponent({
      id: customId,
      number: "4",
      title: "Step 4",
      content: "This is step 4.",
    });
    const containerElement = document.getElementById(customId);
    expect(containerElement).toBeInTheDocument();
  });
});
