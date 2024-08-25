import { formatDisplayWord } from "./formatDisplayWord"; 

describe("formatDisplayWord", () => {
  it("should format a single short word correctly", () => {
    const gameWord = "hello";
    const result = formatDisplayWord(gameWord, 10);
    expect(result.filter((line) => line !== "")).toEqual(["hello"]);
  });

  it("should split words into multiple lines when the total length exceeds maxPerLine", () => {
    const gameWord = "hello world";
    const result = formatDisplayWord(gameWord, 5);
    expect(result.filter((line) => line !== "")).toEqual(["hello", "world"]);
  });

  it("should keep words together and split them onto new lines when necessary", () => {
    const gameWord = "this is a test of the word splitting function";
    const result = formatDisplayWord(gameWord, 10);
    expect(result.filter((line) => line !== "")).toEqual([
      "this is a",
      "test of",
      "the word",
      "splitting",
      "function",
    ]);
  });

  it("should handle a word that is longer than maxPerLine by placing it on its own line", () => {
    const gameWord = "supercalifragilisticexpialidocious";
    const result = formatDisplayWord(gameWord, 5);
    expect(result.filter((line) => line !== "")).toEqual([
      "supercalifragilisticexpialidocious",
    ]);
  });

  it("should return an empty array for an empty input string", () => {
    const result = formatDisplayWord("", 10);
    expect(result.filter((line) => line !== "")).toEqual([]);
  });

  it("should handle a case where the total string length fits within maxPerLine", () => {
    const gameWord = "small text";
    const result = formatDisplayWord(gameWord, 15);
    expect(result.filter((line) => line !== "")).toEqual(["small text"]);
  });

  it("should correctly split a string with multiple spaces between words", () => {
    const gameWord = "this    is    a test";
    const result = formatDisplayWord(gameWord.replace(/\s+/g, " "), 10);
    expect(result.filter((line) => line !== "")).toEqual(["this is a", "test"]);
  });
});
