import { AnswerGiven, Question } from "../../definitions/definitions";

export default ({ answers, questions }: CalculateScoreProps) => {
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

  return {
    adultScore: 0.36,
    respScore: 0.36,
  };
};

interface CalculateScoreProps {
  answers: AnswerGiven[];
  questions: Question[];
}
