import { useState } from "react";

// DEFINITIONS
import { Answer, QuestionConditions } from "../../../definitions/definitions";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { goToNextQuestion } from "../../features/quiz/quizSlice";

// IMPORTS
import CardWrapper from "../ui/card-wrapper";
import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";
import CardScore from "./card-score";
import NameCard from "../card/card-name";
import Button from "../ui/button";

export default function Card() {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const { questions, currentQuestionIndex, hasSetName } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  let child;

  // Derived state
  const currentQuestion = questions[currentQuestionIndex];

  // Handle next question
  const handleNextQuestion = () => {
    if (!selectedAnswer) return;
    dispatch(
      goToNextQuestion({
        questionId: currentQuestion._id,
        answerId: selectedAnswer._id!,
      })
    );
  };

  // Add prompt for first name
  if (!hasSetName) {
    child = <NameCard />;
  } else {
    // If no question, show score
    if (!currentQuestion) child = <CardScore />;
    else {
      console.log(currentQuestion.conditions);
      child = (
        <>
          {/* Card Question */}
          <CardQuestion currentQuestion={currentQuestion} />

          {/* Card Answers */}
          <CardAnswers
            answers={currentQuestion.answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            color={currentQuestion.conditions?.color}
          />

          {/* Next Question Button */}
          <div className="mt-16">
            <Button
              text="Question suivante"
              onClick={handleNextQuestion}
              full
            />
          </div>
        </>
      );
    }
  }

  return <CardWrapper>{child}</CardWrapper>;
}
