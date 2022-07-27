import { useEffect, useState } from "react";
import { Answer, Question } from "../../../definitions/definitions";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchQuestions } from "../../features/quiz/quizThunks";

// COMPONENTS
import { Button, Title, Input } from "../../components/ui";

// ICONS
import { PencilIcon } from "@heroicons/react/solid";

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
          <QuestionItem key={question._id} question={question} index={index} />
        ))}
      </div>
    </div>
  );
};

//  QUESTION ITEM
interface QuestionItemProps {
  question: Question;
  index: number;
}

const QuestionItem = ({ question, index }: QuestionItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  return (
    <div className="border-pink-200 rounded-xl border-2 border-dashed transition-all">
      <div
        className={`flex justify-between pr-4 items-center ${
          isEditing && "border-b-2 border-purple-200"
        }`}
      >
        <div className="flex flex-row items-center flex-1">
          <div className="bg-pink-100 text-pink-400 justify-center p-6 font-bold cursor-move">
            {index + 1}
          </div>
          <div className="font-bold text-xl px-4">{question.title_0}</div>
        </div>
        <div className="flex flex-row gap-2 items-center w-32">
          <Button
            text={isEditing ? "Fermer" : "Modifier"}
            onClick={toggleEdit}
          />
        </div>
      </div>
      {isEditing && (
        <div className="p-6 bg-purple-100">
          <div className="flex flex-row justify-between items-center mb-6 ml-4">
            <div className="text-purple-700/80">
              <Title title="Réponses" size="xl" />
            </div>
            <div className="w-fit-content">
              <Button text="Enregister" style="secondary" small />
            </div>
          </div>

          <div className="space-y-2">
            {question.answers.length
              ? question.answers.map((answer: Answer) => (
                  <AnswerItem answer={answer} />
                ))
              : "Aucune réponse associée."}
          </div>
        </div>
      )}
    </div>
  );
};

// ANSWER ITEM
interface AnswerItemProps {
  answer: Answer;
}

const AnswerItem = ({ answer }: AnswerItemProps) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  return (
    <div className="bg-gradient-to-tl from-purple-700/60 to-purple-800/70 p-3 rounded-md text-white font-bold">
      <div className="flex flex-row justify-between">
        <button className="flex flex-row items-center gap-1 cursor-pointer text-base font-bold">
          <PencilIcon className="text-white w-4" />
          {answer.answer}
        </button>
        <div className="flex flex-row gap-2">
          <div className="w-14">
            <Input
              name="respScore"
              value={answer.respScore?.toString()}
              label="Resp."
              labelColor="white"
              small
            />
          </div>
          <div className="w-14">
            <Input
              name="adultScore"
              value={answer.adultScore?.toString()}
              label="Adulte"
              small
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
