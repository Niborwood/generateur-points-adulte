import { useState, Fragment } from "react";

// DEFINITIONS
import {
  goToNextQuestionProps,
  Question,
  Score,
  AnswersGiven,
} from "../../../definitions/definitions";

// COMPONENT IMPORTS
import Card from "../card/index";

// CONTENT IMPORTS
import rawData from "../../../content/data";

const Quiz = () => {
  // Handles currentQuestion
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion: Question | undefined = rawData.find(
    (data) => data._id === questionIndex
  );

  // Handles score
  const [score, setScore] = useState<Score>({
    adultScore: 0,
    respScore: 0,
    adultQuote: 0,
    respQuote: 0,
  });

  // Handles save of answers
  const [answers, setAnswers] = useState<AnswersGiven>([]);

  // Randomize answers
  const randomizeQuiz = () => {
    for (const question of rawData) {
      // Choose randomly between one of the answers
      const randomIndex = Math.floor(Math.random() * question.answers.length);
      const answer = question.answers[randomIndex];
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

      // Update answers
      if (answers.length >= rawData.length) setAnswers([]);
      else
        setAnswers((prev) => [
          ...prev,
          {
            questionId: question._id,
            answerId: answer._id,
          },
        ]);
    }
    setQuestionIndex(rawData.length);
  };

  // Handles next question logic
  const goToNextQuestion = ({
    questionId,
    answerId,
  }: goToNextQuestionProps) => {
    // if (reset) {
    //   setQuestionIndex(1);
    //   return;
    // }

    // if (!answer) {
    //   return;
    // }

    setAnswers((prev) => [
      ...prev,
      {
        questionId: questionId,
        answerId: answerId,
      },
    ]);

    // New question
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <Fragment>
      <Card
        question={currentQuestion}
        goToNextQuestion={goToNextQuestion}
        answers={answers}
      />
      <button
        className="p-2 mt-8 text-sm text-center bg-white rounded-md"
        onClick={randomizeQuiz}
      >
        🎲 Randomize answers
      </button>
    </Fragment>
  );
};

export default Quiz;
