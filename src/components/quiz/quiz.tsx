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

  // Handles score, variant
  const [scoreAlt, setScoreAlt] = useState<Score>({
    adultScore: 0,
    respScore: 0,
    adultQuote: 0,
    respQuote: 0,
  });

  // Randomize answers
  const randomizeQuiz = () => {
    console.log(rawData);
    for (const answer of rawData) {
    }
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

    // Update scoreAlt
    setScoreAlt((prev) => ({
      adultScore: prev.adultScore + (answer.adultScore ? answer.adultScore : 0),
      respScore: prev.respScore + (answer.respScore ? answer.respScore : 0),
      adultQuote:
        prev.adultQuote +
        (answersRange.adultMax === null ? 0 : answersRange.adultMax / 10),
      respQuote:
        prev.respQuote +
        (answersRange.respMax === null ? 0 : answersRange.respMax / 10),
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
        scoreAlt={scoreAlt}
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
