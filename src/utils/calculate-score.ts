import { AnswerGiven, Question } from "../../definitions/definitions";

const threeDecimals = (num: number) => {
  return Math.round(num * 1000) / 1000;
};

export default ({ answers, questions }: CalculateScoreProps) => {
  let adultScore = 0;
  let respScore = 0;

  for (const givenAnswer of answers) {
    const question = questions.find(
      (question) => question._id === givenAnswer.questionId
    );

    if (!question) continue;
    const answer = question.answers.find(
      (answer) => answer._id === givenAnswer.answerId
    );

    if (!answer) continue;
    adultScore += answer.adultScore ?? 0;
    respScore += answer.respScore ?? 0;
  }
  adultScore = adultScore / questions.length / 10;
  respScore = respScore / questions.length / 10;

  return {
    adultScore: threeDecimals(adultScore),
    respScore: threeDecimals(respScore),
  };
};

interface CalculateScoreProps {
  answers: AnswerGiven[];
  questions: Question[];
}
