interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const scoreColor =
    score > 75 ? "bg-green-600" : score > 60 ? "bg-yellow-500" : "bg-red-600";

  return (
    <span
      className={`
        ${scoreColor}
        text-white
        text-sm
        font-semibold
        px-2
        py-1
        rounded-md
      `}
    >
      {score}
    </span>
  );
};

export default CriticScore;
