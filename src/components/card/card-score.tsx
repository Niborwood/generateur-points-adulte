import { useMemo } from "react";
import { CardScoreProps } from "../../../definitions/definitions";

import rawData from "../../../content/data";

const CardScore = ({ answers }: CardScoreProps) => {
  const { adultScore, respScore } = useMemo(() => {
    let adultScore = 0;
    let adultScoreMax = 0;
    let adultScoreMin = 0;
    let respScore = 0;
    let respScoreMax = 0;
    let adultQuote = 0;
    let adultQuoteMin = 0;
    let respQuote = 0;

    for (const givenAnswer of answers) {
      const question = rawData.find(
        (question) => question._id === givenAnswer.questionId
      );

      if (!question) continue;
      const answerRange = {
        adultMax: Math.max(
          ...question.answers.map((answer) => answer.adultScore ?? 0)
        ),
        adultMin: Math.min(
          ...question.answers.map((answer) => answer.adultScore ?? 0)
        ),
        respMax: Math.max(
          ...question.answers.map((answer) => answer.respScore ?? 0)
        ),
        respMin: Math.min(
          ...question.answers.map((answer) => answer.respScore ?? 0)
        ),
      };
      const answer = question.answers.find(
        (answer) => answer._id === givenAnswer.answerId
      );

      if (!answer) continue;
      adultScore += answer.adultScore ? answer.adultScore : 0;
      adultScoreMax += answerRange.adultMax ? answerRange.adultMax : 0;
      adultScoreMin += answerRange.adultMin ? answerRange.adultMin : 0;
      respScore += answer.respScore ? answer.respScore : 0;
      respScoreMax += answerRange.respMax ? answerRange.respMax : 0;
      adultQuote +=
        answerRange.adultMax === null ? 0 : answerRange.adultMax / 10;
      adultQuoteMin +=
        answerRange.adultMin === null ? 0 : answerRange.adultMin / 10;
      respQuote += answerRange.respMax === null ? 0 : answerRange.respMax / 10;
    }
    const playerAdultScore = adultScore / rawData.length / 10;
    const maxAdultScore = adultScoreMax / rawData.length / 10;
    const playerRespScore = respScore / rawData.length / 10;
    const maxRespScore = respScoreMax / rawData.length / 10;

    return {
      adultScore: (playerAdultScore / maxAdultScore).toFixed(2),
      respScore: (playerRespScore / maxRespScore).toFixed(2),
    };
  }, [answers]);

  return (
    <div>
      <div>
        <p className="mb-4 text-2xl font-bold">Score alt : </p>
        <p>
          <strong>{adultScore}</strong> - Indice d'adulte
        </p>
        <p>
          <strong>{respScore}</strong> - Indice de responsabilité
        </p>
      </div>
    </div>
  );
};

export default CardScore;
