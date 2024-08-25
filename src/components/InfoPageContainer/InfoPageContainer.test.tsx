import "@testing-library/jest-dom"; 
import { render, screen } from "@testing-library/react";
import { InfoPageContainer } from "./InfoPageContainer";
import { InfoPageHeader } from "../../components";

jest.mock("../../components", () => ({
  InfoPageHeader: jest.fn(() => <div>Mock InfoPageHeader</div>),
}));

describe("InfoPageContainer", () => {
  const mockSetPage = jest.fn();

  it("renders the InfoPageContainer with header and children", () => {
    render(
      <InfoPageContainer setPage={mockSetPage} title="Test Title">
        <div>Test Children</div>
      </InfoPageContainer>
    );

    expect(InfoPageHeader).toHaveBeenCalledWith(
      { setPage: mockSetPage, title: "Test Title" },
      {}
    );

    expect(screen.getByText("Test Children")).toBeInTheDocument();
  });

  it("renders the background and foreground elements", () => {
    render(
      <InfoPageContainer setPage={mockSetPage} title="Test Title">
        <div>Test Children</div>
      </InfoPageContainer>
    );

    expect(document.querySelector(".info-page-background")).toBeInTheDocument();
    expect(document.querySelector(".info-page-foreground")).toBeInTheDocument();
  });
});
