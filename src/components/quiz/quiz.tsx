import { useState } from "react";

// DEFINITIONS
import {
  goToNextQuestionProps,
  Question,
  Score,
} from "../../../definitions/definitions";

// COMPONENT IMPORTS
import Card from "../card/index";

const rawData = [
  {
    _id: 1,
    title: "Buvez-vous du café ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 9,
        respScore: 9,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 1,
        respScore: 7,
        answer: "Non",
      },
    ],
  },
  {
    _id: 2,
    title: "A quelle fréquence buvez-vous de l'alcool ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 1,
        respScore: 1,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 5,
        respScore: 5,
        answer: "Le week-end, occasionnellement",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 4,
        answer:
          "Le week-end, quelques soirs de semaine si l'occasion se présente",
      },
      {
        _id: 3,
        adultScore: 8,
        respScore: 8,
        answer: "Un peu tout le temps, parfois le midi",
      },
    ],
  },
];

const Quiz = () => {
  // Handles currentQuestion
  const [questionIndex, setQuestionIndex] = useState(1);
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

  // Handles next question logic
  const goToNextQuestion = ({
    answer,
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
      adultScore: prev.adultScore + answer.adultScore,
      respScore: prev.respScore + answer.respScore,
      adultQuote: prev.adultQuote + (answer.adultScore === null ? 0 : 1),
      respQuote: prev.respQuote + (answer.respScore === null ? 0 : 1),
    }));

    // New question
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <Card
      question={currentQuestion}
      goToNextQuestion={goToNextQuestion}
      score={score}
    />
  );
};

export default Quiz;
