import React, { SetStateAction } from "react";
import { HowToPlayStep, InfoPageContainer } from "../components";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

export const HowToPlayPage = ({ setPage, title }: Props) => {
  const steps = [
    {
      number: "01",
      title: "Choose a Category",
      content:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      number: "02",
      title: "Guess Letters",
      content:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      number: "03",
      title: "Win or Lose",
      content:
        "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];
  return (
    <InfoPageContainer setPage={setPage} title={title}>
      <div className="how-to-play-steps">
        {steps.map((step) => (
          <HowToPlayStep
            number={step.number}
            title={step.title}
            content={step.content}
          />
        ))}
      </div>
    </InfoPageContainer>
  );
};
