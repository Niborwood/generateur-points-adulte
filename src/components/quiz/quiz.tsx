import { Fragment } from "react";

// REDUX
import { useAppDispatch } from "../../hooks/redux";
import { randomizeQuiz } from "../../features/quiz/quizSlice";

// HOOKS
import { useQuestions } from "../../hooks/useQuestions";

// COMPONENT IMPORTS
import QuizCard from "../card/index";

const Quiz = () => {
  // Fetch questions from Supabase
  const { data, loading, error } = useQuestions();
  const dispatch = useAppDispatch();

  // Randomize answers
  const handleRandomize = () => dispatch(randomizeQuiz());

  return (
    <Fragment>
      <QuizCard />
      <button
        className="p-2 mt-8 text-sm text-center bg-white rounded-md"
        onClick={handleRandomize}
      >
        🎲 Randomize quiz
      </button>
    </Fragment>
  );
};

export default Quiz;
