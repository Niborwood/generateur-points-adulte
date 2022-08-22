import { useEffect } from "react";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getScore, clearQuiz } from "../../features/quiz/quizSlice";
import { sendStats } from "../../features/quiz/quizThunks";

// UI
import { ScoreSquare, Button } from "../ui";

const CardScore = () => {
  const dispatch = useAppDispatch();
  const { answers, name, score } = useAppSelector((state) => state.quiz);

  const handleClearQuiz = () => {
    dispatch(clearQuiz());
  };

  useEffect(() => {
    dispatch(getScore());
    dispatch(sendStats());
  }, [answers]);

  return (
    <div>
      <div className="mb-8">
        <p className="mb-4 text-2xl font-bold text-center">
          {name}, voici votre score :{" "}
        </p>
        <div className="flex flex-col gap-4 mt-8 space-between">
          <ScoreSquare score={score.adultScore} type="adult" />
          <ScoreSquare score={score.respScore} type="resp" />
        </div>
      </div>
      <div className="flex justify-center">
        <Button text="Refaire le quiz" onClick={handleClearQuiz} />
      </div>
    </div>
  );
};

export default CardScore;
