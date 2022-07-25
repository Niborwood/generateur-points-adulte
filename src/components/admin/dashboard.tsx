// REDUX
import { useAppSelector } from "../../hooks/redux";

// COMPONENTS
import { Button, Title } from "../../components/ui";

const Dashboard = () => {
  const { questions } = useAppSelector((state) => state.quiz);

  return (
    <div className="">
      <Title title="Modifier les questions" />
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div className="flex justify-between rounded-lg border-dashed border-2 border-pink-200 px-4">
            <div>{question.title_0}</div>
            <div className="flex flex-row gap-2 items-center">
              <div className="bg-pink-100 text-pink-500 flex items-center justify-center rounded-lg aspect-square h-4/5">
                {index + 1}
              </div>
              <Button text="Modifier" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
