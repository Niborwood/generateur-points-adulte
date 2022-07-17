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
  quizState,
  setQuizState,
  hasSetName,
}: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  let child;

  // Add prompt for first name
  if (!hasSetName) {
    child = <NameCard setQuizState={setQuizState} />;
  } else {
    // If no question, show score
    if (!question)
      child = <CardScore answers={quizState.answers} name={quizState.name} />;
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
          <div className="mt-16">
            <Button
              text="Question suivante"
              onClick={() =>
                goToNextQuestion({
                  questionId: question._id,
                  answerId: selectedAnswer?._id || 0,
                })
              }
            />
          </div>
        </>
      );
  }

  return (
    <div className="relative max-w-lg px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-x-1">
      {child}
    </div>
  );
}
