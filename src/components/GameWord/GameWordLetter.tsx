type Props = {
  value: string;
};

export const GameWordLetter = ({ value }: Props) => {
  return (
    <div className={`game-board-letter${value === "_" ? " blank" : ""}`}>
      {value !== "_" && value}
    </div>
  );
};
