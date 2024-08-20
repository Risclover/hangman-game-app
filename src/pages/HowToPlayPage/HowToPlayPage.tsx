import React, { SetStateAction } from "react";
import { HowToPlayStep, InfoPageContainer } from "../../components";
import { steps } from "./data/steps";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

export const HowToPlayPage = ({ setPage, title }: Props) => {
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
