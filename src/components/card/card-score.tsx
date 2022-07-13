import { CardScoreProps } from "../../../definitions/definitions";

const calculateScore = (score: number, quote: number) => {
  return (score / quote / 10).toFixed(2);
};

const CardScore = ({ score }: CardScoreProps) => {
  return (
    <div>
      <div>
        <p className="mb-4 text-2xl font-bold">Score alt : </p>
        <p>
          <strong>{calculateScore(score.adultScore, score.adultQuote)}</strong>{" "}
          - Indice d'adulte
        </p>
        <p>
          <strong>{calculateScore(score.respScore, score.respQuote)}</strong> -
          Indice de responsabilité
        </p>
      </div>
    </div>
  );
};

export default CardScore;
