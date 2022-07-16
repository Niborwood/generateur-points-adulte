import { useState } from "react";

// DEFINITIONS
import { CardProps, Answer } from "../../../definitions/definitions";

// IMPORTS
import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";
import CardScore from "./card-score";
import NameCard from "../card/card-name";
import Button from "../ui/button";

export default function Card({
  question,
  goToNextQuestion,
  answers,
}: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [name, setName] = useState("");
  const [hasSetName, setHasSetName] = useState(false);

  let child;

  // Add prompt for first name
  if (!hasSetName) {
    child = <NameCard setName={setName} setHasSetName={setHasSetName} />;
  } else {
    // If no question, show score
    if (!question) child = <CardScore answers={answers} />;
    else
      child = (
        <>
          {/* Card Question */}
          <CardQuestion
            _id={question._id}
            title={question.title}
            category={question.category}
            helper={question.helper}
          />

          {/* Card Answers */}
          <CardAnswers
            answers={question.answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            color={question.color}
          />

          {/* Next Question Button */}
          {/* <button
            className="flex justify-center w-full p-4 mt-16 mb-2 font-bold text-white transition-all ease-in-out rounded-xl drop-shadow-lg hover:drop-shadow-sm bg-fuchsia-600 hover:bg-emerald-700"
            onClick={() =>
              goToNextQuestion({
                questionId: question._id,
                answerId: selectedAnswer?._id || 0,
              })
            }
          >
            Question suivante
          </button> */}
          <Button
            text="Question suivante"
            onClick={() =>
              goToNextQuestion({
                questionId: question._id,
                answerId: selectedAnswer?._id || 0,
              })
            }
          />
        </>
      );
  }

  return (
    <div className="relative max-w-lg px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-x-1">
      {child}
    </div>
  );
}
