import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Homepage } from "./Homepage";

describe("Homepage Component", () => {
  const mockSetPage = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Homepage with Play and How to Play buttons", () => {
    const { getByText, getByRole } = render(
      <Homepage
        setPage={mockSetPage}
        page={0}
      />
    );

    expect(getByText("How to Play")).toBeInTheDocument();
    expect(getByRole("img", { name: "play-icon" })).toBeInTheDocument();
    expect(getByRole("img", { name: "logo" })).toBeInTheDocument();
  });

  it("calls setPage to 2 when Play button is clicked", () => {
    const { getByRole } = render(
      <Homepage
        setPage={mockSetPage}
        page={0}
      />
    );

    fireEvent.click(getByRole("button", { name: /play-icon/i }));

    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  it("calls setPage to 1 when How to Play button is clicked", () => {
    const { getByText } = render(
      <Homepage
        setPage={mockSetPage}
        page={0}
      />
    );

    fireEvent.click(getByText("How to Play"));

    expect(mockSetPage).toHaveBeenCalledWith(1);
  });
});
