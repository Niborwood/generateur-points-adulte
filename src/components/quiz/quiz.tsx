import { useState, Fragment } from "react";

// HOOKS
import { useQuestions } from "../../../hooks";

// DEFINITIONS
import {
  goToNextQuestionProps,
  Question,
  QuizState,
  AnswersGiven,
} from "../../../definitions/definitions";

// COMPONENT IMPORTS
import Card from "../card/index";

// CONTENT IMPORTS
import rawData from "../../../content/data";

const Quiz = () => {
  // Fetch questions from Supabase
  const { data, loading, error } = useQuestions();
  console.log("🚀 ~ file: quiz.tsx ~ line 23 ~ Quiz ~ data", data);

  // Handles currentQuestion
  const [questionIndex, setQuestionIndex] = useState(0);
  const currentQuestion: Question | undefined = rawData.find(
    (data) => data._id === questionIndex
  );

  // Handles quiz state
  const [quizState, setQuizState] = useState<QuizState>({
    questions: rawData,
    answers: [],
    name: "",
    createdAt: null,
    hasSetName: false,
  });

  // Handles save of answers
  const [answers, setAnswers] = useState<AnswersGiven>([]);

  // Randomize answers
  const randomizeQuiz = () => {
    for (const question of rawData) {
      // Choose randomly between one of the answers
      const randomIndex = Math.floor(Math.random() * question.answers.length);
      const answer = question.answers[randomIndex];

      // Update answers
      if (quizState.answers.length >= rawData.length)
        setQuizState((prev) => ({
          ...prev,
          answers: [],
        }));
      else {
        setQuizState((prev) => ({
          ...prev,
          name: "Random Test",
          hasSetName: true,
          answers: [
            ...prev.answers,
            { questionId: question._id, answerId: answer._id },
          ],
        }));
      }
    }
    setQuestionIndex(rawData.length);
  };

  // Handles next question logic
  const goToNextQuestion = ({
    questionId,
    answerId,
  }: goToNextQuestionProps) => {
    setAnswers((prev) => [
      ...prev,
      {
        questionId: questionId,
        answerId: answerId,
      },
    ]);

    // New question
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <Fragment>
      <Card
        question={currentQuestion}
        goToNextQuestion={goToNextQuestion}
        quizState={quizState}
        setQuizState={setQuizState}
        hasSetName={quizState.hasSetName}
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
