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
  // Question 1
  {
    _id: 1,
    title: "Buvez-vous du café ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 2,
        respScore: null,
        answer: "Oui",
      },
      {
        _id: 1,
        adultScore: 8,
        respScore: null,
        answer: "Non",
      },
    ],
  },
  // Question 2
  {
    _id: 2,
    title: "A quelle fréquence buvez-vous de l'alcool ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 0,
        respScore: 9,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: null,
        respScore: null,
        answer: "Le week-end, occasionnellement",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 3,
        answer:
          "Le week-end, quelques soirs de semaine si l'occasion se présente",
      },
      {
        _id: 3,
        adultScore: 8,
        respScore: 2,
        answer: "Un peu tout le temps, parfois le midi",
      },
    ],
  },
  // Question 3
  {
    _id: 3,
    title: "A quelle régularité sortez-vous au restaurant ?",
    helper: "Ne sont pas comptées les livraisons (type Delieroo)",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 1,
        respScore: null,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 6,
        respScore: 6,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 8,
        answer: "Une fois par semaine, en moyenne",
      },
      {
        _id: 3,
        adultScore: 2,
        respScore: 1,
        answer: "Plus d'une fois par semaine",
      },
    ],
  },
  // Question 4
  {
    _id: 4,
    title: "A quelle régularité laissez-vous des pourboires ?",
    category: "Daily Life",
    answers: [
      {
        _id: 0,
        adultScore: 1,
        respScore: null,
        answer: "Jamais",
      },
      {
        _id: 1,
        adultScore: 6,
        respScore: 6,
        answer: "Une fois par mois, ou moins",
      },
      {
        _id: 2,
        adultScore: 4,
        respScore: 8,
        answer: "Une fois par semaine, en moyenne",
      },
      {
        _id: 3,
        adultScore: 2,
        respScore: 1,
        answer: "Plus d'une fois par semaine",
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
      adultScore: prev.adultScore + (answer.adultScore ? answer.adultScore : 0),
      respScore: prev.respScore + (answer.respScore ? answer.respScore : 0),
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
