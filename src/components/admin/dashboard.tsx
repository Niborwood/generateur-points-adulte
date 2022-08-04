import { useEffect, useState } from "react";
import { Answer, Question } from "../../../definitions/definitions";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchQuestions } from "../../features/quiz/quizThunks";

// COMPONENTS
import { Title } from "../../components/ui";
import EditableItem from "./question-item";

const Dashboard = () => {
  const { questions } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="">
      <Title title="Modifier les questions" size="5xl" />
      <div className="my-16 space-y-4">
        {questions.map((question, index) => (
          <EditableItem key={question._id} question={question} index={index} />
        ))}
      </div>
    </div>
  );
};

// ANSWER ITEM

export default Dashboard;
