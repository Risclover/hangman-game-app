import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { useHomepageLogic } from "./useHomepageLogic";

// Test component to use the useHomepageLogic hook
const TestComponent = ({ initialPage }: { initialPage: number }) => {
  const [page, setPage] = useState(initialPage);

  const { onClick, onPlayClick } = useHomepageLogic(setPage, page);

  return (
    <div>
      <button onClick={onPlayClick}>Play</button>
      <button onClick={onClick}>How to Play</button>
      <div>Current Page: {page}</div>
    </div>
  );
};

describe("useHomepageLogic Hook", () => {
  it("should change page to 2 when Play button is clicked", () => {
    const { getByText } = render(<TestComponent initialPage={0} />);

    fireEvent.click(getByText("Play"));

    expect(getByText("Current Page: 2")).toBeInTheDocument();
  });

  it("should change page to 1 when How to Play button is clicked", () => {
    const { getByText } = render(<TestComponent initialPage={0} />);

    fireEvent.click(getByText("How to Play"));

    expect(getByText("Current Page: 1")).toBeInTheDocument();
  });

  it("should trigger Play when Enter is pressed and page is 0", () => {
    const { getByText } = render(<TestComponent initialPage={0} />);

    fireEvent.keyDown(document, { key: "Enter" });

    expect(getByText("Current Page: 2")).toBeInTheDocument();
  });

  it("should not change page on Enter when page is not 0", () => {
    const { getByText } = render(<TestComponent initialPage={1} />);

    fireEvent.keyDown(document, { key: "Enter" });

    expect(getByText("Current Page: 1")).toBeInTheDocument();
  });
});
