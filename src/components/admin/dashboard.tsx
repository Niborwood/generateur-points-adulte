import { useEffect } from "react";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchQuestions } from "../../features/quiz/quizThunks";

// COMPONENTS
import { Button, Title } from "../../components/ui";

const Dashboard = () => {
  const { questions } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <div className="">
      <Title title="Modifier les questions" />
      <div className="space-y-4 my-16">
        {questions.map((question, index) => (
          <div className="flex justify-between rounded-xl border-dashed border-2 border-pink-200 pr-4 items-center">
            <div className="flex flex-row items-center">
              <div className="bg-pink-100 text-pink-400 justify-center p-6 font-bold cursor-move">
                {index + 1}
              </div>
              <div className="font-bold text-xl px-4">{question.title_0}</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Button text="Modifier" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
