type Props = {
  key: number;
  className?: string;
};

export const PlayerLife = ({ className = "" }: Props) => {
  return <div className={`player-life ${className}`}></div>;
};
