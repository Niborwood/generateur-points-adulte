import { useEffect } from "react";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getScore } from "../../features/quiz/quizSlice";
import { sendStats } from "../../features/quiz/quizThunks";

import { displayThreeDecimals } from "../../utils";

const CardScore = () => {
  const dispatch = useAppDispatch();
  const { answers, name, score } = useAppSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(getScore());
    dispatch(sendStats());
  }, [answers]);

  return (
    <div>
      <div>
        <p className="mb-4 text-2xl font-bold">{name}, voici votre score : </p>
        <p>
          <strong>{displayThreeDecimals(score.adultScore)}</strong> - Indice
          d'adulte
        </p>
        <p>
          <strong>{displayThreeDecimals(score.respScore)}</strong> - Indice de
          responsabilité
        </p>
      </div>
    </div>
  );
};

export default CardScore;
