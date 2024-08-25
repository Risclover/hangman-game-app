import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { GameWord } from "./GameWord";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useGameWord } from "./hooks/useGameWord";

jest.mock("../../hooks/useScreenSize");
jest.mock("./hooks/useGameWord");

describe("GameWord", () => {
  it("should render the word with hidden and revealed letters", () => {
    const mockedUseScreenSize = useScreenSize as jest.Mock;
    const mockedUseGameWord = useGameWord as jest.Mock;

    mockedUseScreenSize.mockReturnValue({ screenWidth: 1440 });
    mockedUseGameWord.mockReturnValue({ word: ["wo__", "te__"] });

    const { getByText, container } = render(
      <GameWord displayWord="word test" guessedLetters={["w", "o", "t"]} />
    );

    expect(getByText("w")).toBeInTheDocument();
    expect(getByText("o")).toBeInTheDocument();
    expect(getByText("t")).toBeInTheDocument();

    expect(container.querySelectorAll(".blank")).toHaveLength(4); 
  });
});
