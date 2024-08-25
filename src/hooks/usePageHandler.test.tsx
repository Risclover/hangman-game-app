import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { usePageHandler } from "./usePageHandler";

describe("usePageHandler", () => {
  const TestComponent = () => {
    const [page, setPage] = usePageHandler(1);

    return (
      <div>
        <span data-testid="page">{page}</span>
        <button onClick={() => setPage(2)}>Set Page to 2</button>
      </div>
    );
  };

  it("should initialize with the given page number", () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId("page").textContent).toBe("1");
  });

  it("should update the page when setPage is called", () => {
    const { getByTestId, getByText } = render(<TestComponent />);

    fireEvent.click(getByText("Set Page to 2"));
    expect(getByTestId("page").textContent).toBe("2");
  });
});
