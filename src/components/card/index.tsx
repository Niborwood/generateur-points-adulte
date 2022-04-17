import { useState } from "react";

// DEFINITIONS
import { CardProps } from "../../../definitions/definitions";

// IMPORTS
import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";

export default function Card({ question, goToNextQuestion }: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if (!question) {
    goToNextQuestion({ answer: null, reset: true });
    return null;
  }
  return (
    <div className="relative px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-y-1">
      {/* Card Question */}
      <CardQuestion
        _id={question._id}
        title={question.title}
        category={question.category}
      />

      {/* Card Answers */}
      <CardAnswers
        answers={question.answers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />

      {/* Next Question Button */}
      <button
        className="flex justify-center w-2/3 p-4 mt-16 mb-2 font-bold text-white transition-all ease-in-out rounded-xl drop-shadow-lg hover:drop-shadow-sm bg-fuchsia-600 hover:bg-sky-700"
        onClick={() => goToNextQuestion({ answer: selectedAnswer })}
      >
        Question suivante
      </button>
    </div>
  );
}
