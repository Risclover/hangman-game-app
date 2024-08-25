import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";
import { useScreenSize } from "./useScreenSize";

const TestScreenSizeComponent = () => {
  const { screenWidth } = useScreenSize();
  return <div>Screen Width: {screenWidth}</div>;
};

describe("useScreenSize Hook", () => {
  it("initializes with the correct screen width", () => {
    const { getByText } = render(<TestScreenSizeComponent />);
    expect(getByText(/Screen Width:/)).toHaveTextContent(
      `Screen Width: ${window.innerWidth}`
    );
  });

  it("updates the screen width on window resize", () => {
    const { getByText } = render(<TestScreenSizeComponent />);

    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(getByText(/Screen Width:/)).toHaveTextContent("Screen Width: 500");

    act(() => {
      window.innerWidth = 1024;
      window.dispatchEvent(new Event("resize"));
    });

    expect(getByText(/Screen Width:/)).toHaveTextContent("Screen Width: 1024");
  });
});
