import { useState } from "react";

// DEFINITIONS
import { Question } from "../../../definitions/definitions";

// COMPONENT IMPORTS
import Card from "../card/index";

const rawData = [
  {
    _id: 1,
    title: "Buvez-vous du café ?",
    category: "Daily Life",
    answers: [
      {
        score: 9,
        answer: "Oui",
      },
      {
        score: 1,
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
        score: 1,
        answer: "Jamais",
      },
      {
        score: 5,
        answer: "Le week-end, occasionnellement",
      },
      {
        score: 4,
        answer:
          "Le week-end, quelques soirs de semaine si l'occasion se présente",
      },
      {
        score: 8,
        answer: "Un peu tout le temps, parfois le midi",
      },
    ],
  },
  {
    _id: 2,
    title: "Avec quelle régularité allez-vous au restaurant ?",
    helper:
      "Sont entendues les sorties au restaurant physique. Les commandes à emporter ne sont pas comptabilisées.",
    category: "Daily Life",
    answers: [
      {
        score: 1,
        answer: "Jamais",
      },
      {
        score: 5,
        answer: "Une fois par mois ou moins",
      },
      {
        score: 4,
        answer: "A fois par semaine, parfois plus, parfois moins",
      },
      {
        score: 8,
        answer: "Un peu tout le temps, parfois le midi",
      },
    ],
  },
];

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(1);

  const currentQuestion: Question =
    rawData.find((data) => data._id === questionIndex) || null;

  const goToNextQuestion = ({ reset = false }: { reset: boolean }) => {
    if (reset) {
      setQuestionIndex((prev) => 1);
      return;
    }

    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <Card question={currentQuestion} goToNextQuestion={goToNextQuestion} />
  );
};

export default Quiz;
