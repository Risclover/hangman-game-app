export function formatDisplayWord(
  gameWord: string,
  maxPerLine: number
): string[] {
  const words = gameWord.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    if (
      currentLine.length + word.length + (currentLine.length > 0 ? 1 : 0) >
      maxPerLine
    ) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine += (currentLine.length > 0 ? " " : "") + word;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}
