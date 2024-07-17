export default function formatDisplayWord(gameWord: string): string[] {
  const words = gameWord.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    // +1 for space if not the first word on the line
    if (
      currentLine.length + word.length + (currentLine.length > 0 ? 1 : 0) >
      10
    ) {
      lines.push(currentLine); // Push the current line to the lines array
      currentLine = word; // Start a new line with the current word
    } else {
      // Add a space before the word if it's not the first word on the line
      currentLine += (currentLine.length > 0 ? " " : "") + word;
    }
  });

  // Don't forget to add the last line if it's not empty
  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}
