type Props = {
  value: string;
};

const GameWordLetter = ({ value }: Props) => {
  return (
    <div className={`game-board-letter${value === "_" ? " blank" : ""}`}>
      {value !== "_" && value}
    </div>
  );
};

export default GameWordLetter;
