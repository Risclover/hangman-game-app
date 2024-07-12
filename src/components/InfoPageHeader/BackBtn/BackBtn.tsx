import "./BackBtn.css";
import BackIcon from "/assets/images/icon-back.svg";

type Props = {
  setPage: any;
};

const BackBtn = ({ setPage }: Props) => {
  return (
    <button className="back-btn" onClick={() => setPage(0)}>
      <img src={BackIcon} />
    </button>
  );
};

export default BackBtn;
