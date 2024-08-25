import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { InfoPageHeader } from "./InfoPageHeader";
import { CircleBtn, InfoPageTitle } from "../../components";

jest.mock("../../assets/images/icon-back.svg", () => "MockedSVG");

jest.mock("../../components", () => ({
  CircleBtn: jest.fn(({ onClick }) => (
    <button onClick={onClick} aria-label="Back Button">
      Mocked CircleBtn
    </button>
  )),
  InfoPageTitle: jest.fn(({ title }) => <h1>{title}</h1>),
}));

describe("InfoPageHeader", () => {
  const mockSetPage = jest.fn();

  it("renders the header with the title and CircleBtn", () => {
    render(<InfoPageHeader setPage={mockSetPage} title="Test Title" />);

    expect(CircleBtn).toHaveBeenCalledWith(
      {
        onClick: expect.any(Function),
        value: "MockedSVG",
      },
      {}
    );
    expect(InfoPageTitle).toHaveBeenCalledWith({ title: "Test Title" }, {});

    expect(
      screen.getByRole("button", { name: /Back Button/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("calls setPage with 0 when CircleBtn is clicked", () => {
    render(<InfoPageHeader setPage={mockSetPage} title="Test Title" />);

    fireEvent.click(screen.getByRole("button", { name: /Back Button/i }));

    expect(mockSetPage).toHaveBeenCalledWith(0);
  });
});
