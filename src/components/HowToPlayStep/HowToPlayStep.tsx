import "./HowToPlayStep.css";

type Props = {
  number: string;
  title: string;
  content: string;
};

export const HowToPlayStep = ({ number, title, content }: Props) => {
  return (
    <div className="how-to-play-step-container">
      <h2 className="how-to-play-step-number">{number}</h2>
      <h3 className="how-to-play-step-title">{title}</h3>
      <p className="how-to-play-step-content">{content}</p>
    </div>
  );
};
