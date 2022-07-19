import { useState } from "react";

// DEFINITIONS
import { CardProps, Answer } from "../../../definitions/definitions";

// IMPORTS
import CardWrapper from "../ui/card-wrapper";
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
}: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  let child;

  // Add prompt for first name
  if (!quizState.hasSetName) {
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

  return <CardWrapper>{child}</CardWrapper>;
}
