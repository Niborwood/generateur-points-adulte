import { CardScoreProps } from "../../../definitions/definitions";

const CardScore = ({ score }: CardScoreProps) => {
  return (
    <div>
      CardScore: {score.adultScore / 20} &amp; {score.respScore / 20}
    </div>
  );
};

export default CardScore;
