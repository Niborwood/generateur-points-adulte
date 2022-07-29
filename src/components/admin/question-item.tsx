import { useState, FormEvent, useRef } from "react";
import { Question, Answer } from "../../../definitions/definitions";

import { Button, Title, Input } from "../../components/ui";
import AnswerItem from "./answer-item";

// REDUX
import { useAppDispatch } from "../../hooks/redux";
import { upsertQuestion } from "../../features/quiz/quizThunks";

interface QuestionItemProps {
  question: Question;
  index: number;
}

const QuestionItem = ({ question, index }: QuestionItemProps) => {
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>(question.answers);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  // TITLE REFS
  const title0Ref = useRef<HTMLInputElement>(null);
  const title1Ref = useRef<HTMLInputElement>(null);

  const addAnswer = () => {
    setAnswers((prev) => [
      ...prev,
      {
        answer: "Nouvelle réponse",
        respScore: 0,
        adultScore: 0,
      },
    ]);
  };

  const handleQuestionUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title0 = title0Ref.current?.value;
    const title1 = title1Ref.current?.value;

    if (!title0 || !title1) return;

    dispatch(
      upsertQuestion({
        question: {
          _id: question._id,
          title_0: title0,
          title_1: title1,
          updated_at: new Date(),
        },
      })
    );
    console.log("handle question update");
  };

  return (
    <div className="transition-all border-2 border-pink-200 border-dashed rounded-xl">
      <div
        className={`flex justify-between items-center ${
          isEditing && "border-b-2 border-purple-200"
        }`}
      >
        <div className="flex flex-row items-center flex-1">
          <div
            className={`self-stretch justify-center p-6 font-bold text-pink-400 bg-pink-100 cursor-move ${
              isEditing ? "rounded-tl-xl" : "rounded-l-xl"
            }`}
          >
            {index + 1}
          </div>
          <div className="px-4 text-xl font-bold">{question.title_0}</div>
        </div>
        <div className="pr-2">
          <Button
            text={isEditing ? "Fermer" : "Modifier"}
            onClick={toggleEdit}
          />
        </div>
      </div>
      {isEditing && (
        <form
          className="p-6 space-y-8 bg-purple-100 rounded-b-xl"
          onSubmit={handleQuestionUpdate}
        >
          {/* QUESTION */}
          <div>
            <div className="mb-6 ml-4 text-purple-700/80">
              <Title title="Questions" size="xl" />
            </div>
            <div className="flex flex-row gap-4 sm:flex-col">
              <div className="flex-1 mb-2 ml-3 text-sm font-bold text-purple-600">
                Vouvoiement
              </div>
              <div className="flex-1 mb-2 ml-3 text-sm font-bold text-purple-600">
                Tutoiement
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              {[question.title_0, question.title_1].map((title, index) => (
                <div
                  key={index}
                  className="flex-1 p-6 text-lg font-bold bg-gradient-to-tl from-purple-600 to-purple-900 text-slate-100 rounded-2xl"
                >
                  <Input
                    name={`title_${index}`}
                    ref={index === 0 ? title0Ref : title1Ref}
                    type="text"
                    editableArea
                    defaultValue={title}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ANSWER */}
          <div>
            <div className="mb-6 ml-4 text-purple-700/80">
              <Title title="Réponses" size="xl" />
            </div>
            <div className="space-y-2">
              {answers.length
                ? answers.map((answer: Answer) => (
                    <AnswerItem answer={answer} />
                  ))
                : "Aucune réponse associée."}
            </div>
            <div className="flex flex-row justify-end gap-4 mt-4">
              <Button
                text="Ajouter une question"
                style="secondary"
                small
                onClick={addAnswer}
              />
              <Button text="Enregister" style="secondary" small type="submit" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default QuestionItem;
