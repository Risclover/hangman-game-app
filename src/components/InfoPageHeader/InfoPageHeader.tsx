import React, { SetStateAction } from "react";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import InfoPageTitle from "./InfoPageTitle";
import BackBtnIcon from "/assets/images/icon-back.svg";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

const InfoPageHeader = ({ setPage, title }: Props) => {
  return (
    <div className="info-page-header">
      <PrimaryBtn setPage={setPage} icon={BackBtnIcon} />
      <InfoPageTitle title={title} />
      <div></div>
    </div>
  );
};

export default InfoPageHeader;
