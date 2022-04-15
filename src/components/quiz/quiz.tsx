import { useState } from "react";

// DEFINITIONS
import { Question } from "../../../definitions/definitions";

// COMPONENT IMPORTS
import Card from "../card/index";

const rawData = [
  {
    _id: 1,
    title: "Exemple de question ?",
    category: "Daily Life",
    answers: [
      {
        score: 8,
        answer: "Answer 1",
      },
      {
        score: 1,
        answer: "Answer 2",
      },
      {
        score: 0,
        answer: "Answer 3",
      },
      {
        score: 4,
        answer: "Answer 4",
      },
    ],
  },
  {
    _id: 2,
    title: "Autre exemple de question ?",
    category: "Daily Life",
    answers: [
      {
        score: 8,
        answer: "Answer 1",
      },
      {
        score: 1,
        answer: "Answer 2",
      },
      {
        score: 0,
        answer: "Answer 3",
      },
      {
        score: 4,
        answer: "Answer 4",
      },
    ],
  },
];

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(1);

  const currentQuestion: Question = rawData.find(
    (data) => data._id === questionIndex
  );

  const goToNextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <Card question={currentQuestion} goToNextQuestion={goToNextQuestion} />
  );
};

export default Quiz;
