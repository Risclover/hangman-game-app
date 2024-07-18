type Props = {
  key: number;
  className?: string;
};

const PlayerLife = ({ className = "" }: Props) => {
  return <div className={`player-life ${className}`}></div>;
};

export default PlayerLife;
