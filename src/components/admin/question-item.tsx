import { useState, FormEvent, useRef } from "react";
import {
  Question,
  Answer,
  AnswerToUpsert,
  FormValues,
} from "../../../definitions/definitions";

import { Button, Title, Input, Form } from "../../components/ui";
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

  const deleteAnswer = (index: number) => {
    setAnswers((prev) => prev.filter((_, i) => i !== index));
  };

  const handleForm = (formValues: FormValues) => {
    const { title_0, title_1, question_id } = formValues;

    const answers: AnswerToUpsert[] = [];
    for (const key in formValues) {
      // Only keys concerning nnswers
      if (!key.startsWith("asw_")) continue;

      // If _id is null, skip it
      if (key.includes("_id") && !formValues[key]) continue;

      // Get currentQuestionIndex
      const currentQuestionIndex = key.at(4);
      if (!currentQuestionIndex) continue;

      // Create the answer object and insert elements
      const sanitizedKey = key.replace(`asw_${currentQuestionIndex}_`, "");
      if (!answers[+currentQuestionIndex]) answers[+currentQuestionIndex] = {};

      answers[+currentQuestionIndex][sanitizedKey] =
        formValues[key].toString() || null;
      if (!answers[+currentQuestionIndex].question_id)
        answers[+currentQuestionIndex].question_id = question_id.toString();
    }

    dispatch(
      upsertQuestion({
        question: {
          _id: +question_id,
          title_0: title_0.toString(),
          title_1: title_1.toString(),
          updated_at: new Date(),
        },
        answers,
      })
    );
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
        <Form
          className="p-6 space-y-8 bg-purple-100 rounded-b-xl"
          onSubmit={handleForm}
        >
          {/* QUESTION */}
          <Input
            type="hidden"
            name="question_id"
            defaultValue={question._id.toString()}
          />
          <div>
            <div className="mb-6 ml-4 text-purple-700/80">
              <Title title="Questions" size="xl" />
            </div>
            <div className="flex flex-col gap-8 mt-12 md:gap-4 md:flex-row">
              {[question.title_0, question.title_1].map((title, index) => (
                <div
                  key={index}
                  className={`relative flex-1 p-6 text-lg font-bold bg-gradient-to-tl from-purple-600 to-purple-900 text-slate-100 rounded-2xl before:content-['${
                    index === 1 ? "Tutoiement" : "Vouvoiement"
                  }'] before:text-sm before:absolute before:-top-6 before:text-purple-600 before:font-medium shadow-xl`}
                >
                  <Input
                    name={`title_${index}`}
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
                ? answers.map((answer: Answer, index) => (
                    <AnswerItem
                      key={answer.answer}
                      answer={answer}
                      index={index}
                      deleteAnswer={deleteAnswer}
                    />
                  ))
                : "Aucune réponse associée."}
            </div>
            <div className="flex flex-row justify-end gap-4 mt-4">
              <Button
                text="Ajouter une réponse"
                style="secondary"
                small
                onClick={addAnswer}
              />
              <Button text="Enregister" style="secondary" small type="submit" />
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default QuestionItem;
