import { useState, Fragment } from "react";

// HOOKS
import { useQuestions } from "../../../hooks";

// DEFINITIONS
import {
  AnswersGiven,
  goToNextQuestionProps,
  QuizState,
} from "../../../definitions/definitions";

// COMPONENT IMPORTS
import Card from "../card/index";

// CONTENT IMPORTS
import rawData from "../../../content/data";

const Quiz = () => {
  // Fetch questions from Supabase
  const { data, loading, error } = useQuestions();
  console.log("🚀 ~ file: quiz.tsx ~ line 23 ~ Quiz ~ data", data);

  // Handles quiz state
  const [quizState, setQuizState] = useState<QuizState>({
    questions: rawData,
    answers: [],
    currentQuestionIndex: 0,
    name: "",
    createdAt: null,
    hasSetName: false,
  });

  // Randomize answers
  const randomizeQuiz = () => {
    let answers: AnswersGiven = [];
    for (const question of rawData) {
      // Choose randomly between one of the answers
      const randomIndex = Math.floor(Math.random() * question.answers.length);
      const answer = question.answers[randomIndex];
      answers.push({ questionId: question._id, answerId: answer._id });
    }

    setQuizState((prev) => ({
      ...prev,
      name: "Random Test",
      hasSetName: true,
      answers,
      currentQuestionIndex: rawData.length,
    }));
  };

  // Handles next question logic
  const goToNextQuestion = ({
    questionId,
    answerId,
  }: goToNextQuestionProps) => {
    setQuizState((prev) => ({
      ...prev,
      answers: [...prev.answers, { questionId, answerId }],
      currentQuestionIndex: prev.currentQuestionIndex + 1,
    }));
  };

  return (
    <Fragment>
      <Card
        question={quizState.questions.find(
          (question) => question._id === quizState.currentQuestionIndex
        )}
        goToNextQuestion={goToNextQuestion}
        quizState={quizState}
        setQuizState={setQuizState}
      />
      <button
        className="p-2 mt-8 text-sm text-center bg-white rounded-md"
        onClick={randomizeQuiz}
      >
        🎲 Randomize quiz
      </button>
    </Fragment>
  );
};

export default Quiz;
