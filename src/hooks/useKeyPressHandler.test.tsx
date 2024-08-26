import "@testing-library/jest-dom";
import { useKeyPressHandler } from "./useKeyPressHandler";
import { render } from "@testing-library/react";

describe("useKeyPressHandler", () => {
  const mockSetShowPauseMenu = jest.fn();
  const mockSetPage = jest.fn();
  const mockResetGame = jest.fn();
  const mockHandleShowError = jest.fn();

  const TestComponent = ({
    page,
    showWin,
    showLose,
    showPauseMenu,
    errorMessage = "",
  }: {
    page: number;
    showWin: boolean;
    showLose: boolean;
    showPauseMenu: boolean;
    errorMessage?: string;
  }) => {
    useKeyPressHandler({
      page,
      showWin,
      showLose,
      showPauseMenu,
      setShowPauseMenu: mockSetShowPauseMenu,
      setPage: mockSetPage,
      resetGame: mockResetGame,
      errorMessage,
      handleShowError: mockHandleShowError,
    });

    return <div />;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets showPauseMenu to true when Escape is pressed and the page is 3, without win/lose or pauseMenu", () => {
    render(
      <TestComponent
        page={3}
        showWin={false}
        showLose={false}
        showPauseMenu={false}
      />
    );

    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event);

    expect(mockSetShowPauseMenu).toHaveBeenCalledWith(true);
    expect(mockSetPage).not.toHaveBeenCalled();
    expect(mockResetGame).not.toHaveBeenCalled();
  });

  it("resets the game when Escape is pressed and showWin or showLose is true", () => {
    render(
      <TestComponent
        page={3}
        showWin={true}
        showLose={false}
        showPauseMenu={false}
      />
    );

    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event);

    expect(mockResetGame).toHaveBeenCalled();
    expect(mockSetShowPauseMenu).not.toHaveBeenCalled();
    expect(mockSetPage).not.toHaveBeenCalled();
  });

  it("sets page to 0 when Escape is pressed and the page is 1", () => {
    render(
      <TestComponent
        page={1}
        showWin={false}
        showLose={false}
        showPauseMenu={false}
      />
    );

    const event = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(event);

    expect(mockSetPage).toHaveBeenCalledWith(0);
  });

  // New test case for error message handling
  it("calls handleShowError when Escape or Enter is pressed and there is an error message", () => {
    render(
      <TestComponent
        page={3}
        showWin={false}
        showLose={false}
        showPauseMenu={false}
        errorMessage="Error occurred"
      />
    );

    const escapeEvent = new KeyboardEvent("keydown", { key: "Escape" });
    document.dispatchEvent(escapeEvent);
    expect(mockHandleShowError).toHaveBeenCalledTimes(1);

    const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
    document.dispatchEvent(enterEvent);
    expect(mockHandleShowError).toHaveBeenCalledTimes(2);
  });
});
