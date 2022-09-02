import { useState, useEffect } from "react";

// DEFINITIONS
import { Answer, QuestionConditions } from "../../../definitions/definitions";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { goToNextQuestion } from "../../features/quiz/quizSlice";

// IMPORTS
import { CardWrapper, Button } from "../ui/";
import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";
import CardScore from "./card-score";
import StartCard from "./start-card";
import HomeLaunch from "./home-launch";

export default function Card() {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  console.log(
    "🚀 ~ file: index.tsx ~ line 20 ~ Card ~ selectedAnswer",
    selectedAnswer
  );
  const { questions, currentQuestionIndex, hasSetName, hasClickedLaunch } =
    useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  let child;

  // Derived state
  const currentQuestion = questions[currentQuestionIndex];

  // Reinitialize selected answer when question changes
  useEffect(() => {
    setSelectedAnswer(null);
  }, [currentQuestionIndex]);

  // Handle next question
  const handleNextQuestion = () => {
    if (!selectedAnswer || selectedAnswer._id === undefined) return;
    dispatch(
      goToNextQuestion({
        questionId: currentQuestion._id,
        answerId: selectedAnswer._id,
      })
    );
  };

  if (!hasClickedLaunch) {
    return <HomeLaunch />;
    // Add prompt for first name
  } else if (!hasSetName) {
    child = <StartCard />;
  } else {
    // If no question, show score
    if (!currentQuestion) child = <CardScore />;
    else {
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
