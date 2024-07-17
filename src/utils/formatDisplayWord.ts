export default function formatDisplayWord(gameWord: string): string[] {
  const words = gameWord.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  words.forEach((word) => {
    // Check if adding this word would exceed the line limit
    if (currentLine.length + word.length + 1 > 10) {
      // +1 for the space
      lines.push(currentLine.trim()); // Push the current line and reset
      currentLine = word + " "; // Start a new line with the current word
    } else {
      currentLine += word + " "; // Append word to the current line
    }
  });

  // Add the last line if it's not empty
  if (currentLine) {
    lines.push(currentLine.trim());
  }

  return lines;
}
