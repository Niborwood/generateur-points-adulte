import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

// REDUX
import { useAppDispatch } from "../../hooks/redux";
import { randomizeQuiz } from "../../features/quiz/quizSlice";
import { fetchQuestions } from "../../features/quiz/quizThunks";

// COMPONENT IMPORTS
import QuizCard from "../card/index";

const Quiz = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  // Randomize answers
  const handleRandomize = () => dispatch(randomizeQuiz());

  return (
    <Fragment>
      <QuizCard />
      <div className="space-x-4">
        <button
          className="p-2 text-sm text-center bg-white rounded-md"
          onClick={handleRandomize}
        >
          🎲 Randomize quiz
        </button>
        <button className="p-2 mt-8 text-sm text-center bg-white rounded-md">
          <Link to="/gpa-admin">🔒 Admin</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Quiz;
