type Props = {
  title: string;
};

const InfoPageTitle = ({ title }: Props) => {
  return (
    <h1 data-text={title} className="info-page-title">
      {title}
    </h1>
  );
};

export default InfoPageTitle;
