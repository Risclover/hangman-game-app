type Props = {
  title: string;
};

export const InfoPageTitle = ({ title }: Props) => {
  return (
    <h1 data-text={title} className="info-page-title">
      {title}
    </h1>
  );
};
