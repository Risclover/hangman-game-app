import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HowToPlayPage } from "./HowToPlayPage";

jest.mock("../../components", () => ({
  InfoPageContainer: jest.fn(({ children }) => <div>{children}</div>),
  HowToPlayStep: jest.fn(({ number, title, content }) => (
    <div>
      <h2>
        Step {number}: {title}
      </h2>
      <p>{content}</p>
    </div>
  )),
}));

jest.mock("./data/steps", () => ({
  steps: [
    { number: 1, title: "Step 1 Title", content: "Step 1 Content" },
    { number: 2, title: "Step 2 Title", content: "Step 2 Content" },
  ],
}));

describe("HowToPlayPage Component", () => {
  const mockSetPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the HowToPlayPage with the correct steps", () => {
    render(<HowToPlayPage setPage={mockSetPage} title="How to Play" />);

    expect(screen.getByText("Step 1: Step 1 Title")).toBeInTheDocument();
    expect(screen.getByText("Step 1 Content")).toBeInTheDocument();
    expect(screen.getByText("Step 2: Step 2 Title")).toBeInTheDocument();
    expect(screen.getByText("Step 2 Content")).toBeInTheDocument();
  });

  it("renders InfoPageContainer with the correct children", () => {
    render(<HowToPlayPage setPage={mockSetPage} title="How to Play" />);

    expect(screen.getByText("Step 1: Step 1 Title")).toBeInTheDocument(); 
  });
});
