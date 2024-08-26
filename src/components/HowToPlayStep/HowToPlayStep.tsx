import "./HowToPlayStep.css";

type Props = {
  id: string;
  number: string;
  title: string;
  content: string;
};

export const HowToPlayStep = ({ id, number, title, content }: Props) => {
  return (
    <li className="how-to-play-step-container" id={`${id}`}>
      <h2 className="how-to-play-step-number">{number}</h2>
      <h3 className="how-to-play-step-title">{title}</h3>
      <p className="how-to-play-step-content">{content}</p>
    </li>
  );
};
