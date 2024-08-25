import React, { SetStateAction } from "react";
import { CircleBtn, InfoPageTitle } from "../../components";
import CircleBtnIcon from "../../assets/images/icon-back.svg";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

export const InfoPageHeader = ({ setPage, title }: Props) => {
  return (
    <div className="info-page-header">
      <CircleBtn onClick={() => setPage(0)} value={CircleBtnIcon} />
      <InfoPageTitle title={title} />
      <div className="empty-div"></div>
    </div>
  );
};
