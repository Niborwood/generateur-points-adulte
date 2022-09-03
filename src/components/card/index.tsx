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
  const { questions, currentQuestionIndex, hasSetName, hasClickedLaunch } =
    useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

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

  // Before any prompt
  if (!hasClickedLaunch) return <HomeLaunch />;
  // Name and age card
  else if (!hasSetName)
    return (
      <CardWrapper>
        <StartCard />
      </CardWrapper>
    );
  // No question left, score
  else if (!currentQuestion) return <CardScore />;
  // Questions flow
  else
    return (
      <CardWrapper>
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
          <Button text="Question suivante" onClick={handleNextQuestion} full />
        </div>
      </CardWrapper>
    );
}
