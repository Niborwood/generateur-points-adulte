import { CardScoreProps } from "../../../definitions/definitions";

const calculateScore = (score: number, quote: number) => {
  console.log("score", score, "| quote", quote);
  return (score / quote / 10).toFixed(2);
};

const calculateScoreAlt = (scoreAlt: number, quote: number) => {
  console.log("scoreAlt", scoreAlt, "| quote", quote);
  return (scoreAlt / quote / 10).toFixed(2);
};

const CardScore = ({ score, scoreAlt }: CardScoreProps) => {
  return (
    <div>
      <div>
        <p className="mb-4 text-2xl font-bold">Score : </p>
        <p>
          <strong>{calculateScore(score.adultScore, score.adultQuote)}</strong>{" "}
          - Indice d'adulte
        </p>
        <p>
          <strong>{calculateScore(score.respScore, score.respQuote)}</strong> -
          Indice de responsabilité
        </p>
      </div>
      <div>
        <p className="mb-4 text-2xl font-bold">Score alt : </p>
        <p>
          <strong>
            {calculateScoreAlt(scoreAlt.adultScore, scoreAlt.adultQuote)}
          </strong>{" "}
          - Indice d'adulte
        </p>
        <p>
          <strong>
            {calculateScoreAlt(scoreAlt.respScore, scoreAlt.respQuote)}
          </strong>{" "}
          - Indice de responsabilité
        </p>
      </div>
    </div>
  );
};

export default CardScore;
