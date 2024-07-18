import React, { PropsWithChildren, SetStateAction } from "react";
import { InfoPageHeader } from "../../components";

type Props = {
  setPage: React.Dispatch<SetStateAction<number>>;
  title: string;
};

export const InfoPageContainer = ({
  children,
  setPage,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <div className="info-page-container">
      <div className="info-page-background"></div>
      <div className="info-page-foreground">
        <InfoPageHeader setPage={setPage} title={title} />
        <div className="info-page-main-content">{children}</div>
      </div>
    </div>
  );
};
