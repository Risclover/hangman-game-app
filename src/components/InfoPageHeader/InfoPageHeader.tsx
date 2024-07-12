import BackBtn from "./BackBtn/BackBtn";
import InfoPageTitle from "./InfoPageTitle";

type Props = {
  setPage: any;
  title: string;
};

const InfoPageHeader = ({ setPage, title }: Props) => {
  return (
    <div className="info-page-header">
      <BackBtn setPage={setPage} />
      <InfoPageTitle title={title} />
      <div></div>
    </div>
  );
};

export default InfoPageHeader;
