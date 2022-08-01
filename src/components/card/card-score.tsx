import { useMemo, useEffect } from "react";
import useStats from "../../hooks/useStats";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { calculateScore } from "../../features/quiz/quizSlice";

const CardScore = () => {
  const dispatch = useAppDispatch();
  const { answers, name, score } = useAppSelector((state) => state.quiz);
  const { loading, error } = useStats(answers, name);

  // const { adultScore, respScore } = useMemo(() => {
  //   let adultScore = 0;
  //   let respScore = 0;

  //   for (const givenAnswer of answers) {
  //     const question = questions.find(
  //       (question) => question._id === givenAnswer.questionId
  //     );

  //     if (!question) continue;
  //     const answer = question.answers.find(
  //       (answer) => answer._id === givenAnswer.answerId
  //     );

  //     if (!answer) continue;
  //     adultScore += answer.adultScore ? answer.adultScore : 0;
  //     respScore += answer.respScore ? answer.respScore : 0;
  //   }
  //   const playerAdultScore = adultScore / questions.length / 10;
  //   const playerRespScore = respScore / questions.length / 10;

  //   return {
  //     adultScore: playerAdultScore.toFixed(2),
  //     respScore: playerRespScore.toFixed(2),
  //   };
  // }, [answers]);

  useEffect(() => {
    dispatch(calculateScore());
  }, [answers]);

  return (
    <div>
      <div>
        <p className="mb-4 text-2xl font-bold">{name}, voici votre score : </p>
        <p>
          <strong>{score.adultScore}</strong> - Indice d'adulte
        </p>
        <p>
          <strong>{score.respScore}</strong> - Indice de responsabilité
        </p>
      </div>
    </div>
  );
};

export default CardScore;
