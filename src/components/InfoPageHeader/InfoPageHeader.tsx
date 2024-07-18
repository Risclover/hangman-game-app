import React, { SetStateAction } from "react";
import { CircleBtn, InfoPageTitle } from "../../components";
import { Icons } from "../../assets/images";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

export const InfoPageHeader = ({ setPage, title }: Props) => {
  return (
    <div className="info-page-header">
      <CircleBtn onClick={() => setPage(0)} value={Icons.BackIcon} />
      <InfoPageTitle title={title} />
      <div></div>
    </div>
  );
};
