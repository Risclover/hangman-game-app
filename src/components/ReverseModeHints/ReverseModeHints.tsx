import "./ReverseModeHints.css";

type Props = {
  hintsList: string[];
};

const ReverseModeHints = ({ hintsList }: Props) => {
  console.log("HINTSLIST:", hintsList);
  return (
    <div className="reverse-mode-hints-container">
      Hints:{" "}
      {hintsList.map((hint, idx) => (
        <div className="reverse-mode-hint">
          {idx !== hintsList.length - 1 ? hint + ", " : hint}
        </div>
      ))}
    </div>
  );
};

export default ReverseModeHints;
