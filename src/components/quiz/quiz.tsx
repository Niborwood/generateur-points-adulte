import { useState, Fragment } from "react";

// DEFINITIONS
import {
  goToNextQuestionProps,
  Question,
  Score,
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

  // Randomize answers
  const randomizeQuiz = () => {
    console.log(rawData);
    for (const question of rawData) {
      // Choose randomly between one of the answers
      const randomIndex = Math.floor(Math.random() * question.answers.length);
      const answer = question.answers[randomIndex];
      const answerRange = {
        adultMax: question
          ? Math.max(...question.answers.map((answer) => answer.adultScore)) ??
            null
          : 0,
        adultMin: question
          ? Math.min(...question.answers.map((answer) => answer.adultScore)) ??
            null
          : 0,
        respMax: question
          ? Math.max(...question.answers.map((answer) => answer.respScore)) ??
            null
          : 0,
        respMin: question
          ? Math.min(...question.answers.map((answer) => answer.respScore)) ??
            null
          : null,
      };
      // Update scor
      setScore((prev) => ({
        adultScore:
          prev.adultScore + (answer.adultScore ? answer.adultScore : 0),
        respScore: prev.respScore + (answer.respScore ? answer.respScore : 0),
        adultQuote:
          prev.adultQuote +
          (answerRange.adultMax === null ? 0 : answerRange.adultMax / 10),
        respQuote:
          prev.respQuote +
          (answerRange.respMax === null ? 0 : answerRange.respMax / 10),
      }));
    }
    setQuestionIndex(rawData.length);
  };

  // Handles next question logic
  const goToNextQuestion = ({
    answer,
    answersRange,
    reset = false,
  }: goToNextQuestionProps) => {
    if (reset) {
      setQuestionIndex(1);
      return;
    }

    if (!answer) {
      return;
    }

    // Update score
    setScore((prev) => ({
      adultScore: prev.adultScore + (answer.adultScore ? answer.adultScore : 0),
      respScore: prev.respScore + (answer.respScore ? answer.respScore : 0),
      adultQuote: prev.adultQuote + (answer.adultScore === null ? 0 : 1),
      respQuote: prev.respQuote + (answer.respScore === null ? 0 : 1),
    }));

    // New question
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <Fragment>
      <Card
        question={currentQuestion}
        goToNextQuestion={goToNextQuestion}
        score={score}
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
