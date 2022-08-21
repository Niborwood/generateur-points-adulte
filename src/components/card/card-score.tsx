import { useEffect } from "react";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getScore } from "../../features/quiz/quizSlice";
import { sendStats } from "../../features/quiz/quizThunks";

// UI
import { ScoreSquare } from "../ui";

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
        <div className="flex flex-col gap-2 space-between">
          <ScoreSquare score={score.adultScore} type="adult" />
          <ScoreSquare score={score.respScore} type="resp" />
        </div>
      </div>
    </div>
  );
};

export default CardScore;
