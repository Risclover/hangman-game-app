import React, { SetStateAction } from "react";
import { CircleBtn, InfoPageTitle } from "../../components";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

export const InfoPageHeader = ({ setPage, title }: Props) => {
  return (
    <div className="info-page-header">
      <CircleBtn
        onClick={() => setPage(0)}
        value={"/hangman-game-app/src/assets/images/icon-back.svg"}
      />
      <InfoPageTitle title={title} />
      <div className="empty-div"></div>
    </div>
  );
};
