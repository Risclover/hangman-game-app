type Props = {
  value: string;
};

const GameWordLetter = ({ value }: Props) => {
  return (
    <>
      {value !== " " && (
        <div className={`game-board-letter${value === "_" ? " blank" : ""}`}>
          {value !== "_" && value}
        </div>
      )}
    </>
  );
};

export default GameWordLetter;
