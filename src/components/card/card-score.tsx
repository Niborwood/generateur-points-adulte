import { CardScoreProps } from "../../../definitions/definitions";

const CardScore = ({ score }: CardScoreProps) => {
  return (
    <div>
      <p className="mb-4 font-bold">CardScore: </p>
      <p>{score.adultScore / 20} - Indice d'adulte</p>
      <p>{score.respScore / 20} - Indice de responsabilité</p>
    </div>
  );
};

export default CardScore;
