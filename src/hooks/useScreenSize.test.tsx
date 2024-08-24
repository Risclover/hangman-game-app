import "@testing-library/jest-dom"; // Import jest-dom for extended matchers
import { render, act } from "@testing-library/react";
import { useScreenSize } from "./useScreenSize";

// Test component to use the useScreenSize hook
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

    // Simulate window resize
    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(getByText(/Screen Width:/)).toHaveTextContent("Screen Width: 500");

    // Reset the window width for other tests
    act(() => {
      window.innerWidth = 1024;
      window.dispatchEvent(new Event("resize"));
    });

    expect(getByText(/Screen Width:/)).toHaveTextContent("Screen Width: 1024");
  });
});
