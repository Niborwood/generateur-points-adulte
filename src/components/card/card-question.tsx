import { Question } from "../../../definitions/definitions";
import { useAppSelector } from "../../hooks/redux";

export default function CardQuestion({ currentQuestion }: CardQuestionProps) {
  const { kindOfQuestions } = useAppSelector((state) => state.quiz);

  return (
    <div className="px-6 mb-8 text-center">
      <h3 className="text-4xl font-bold">
        {currentQuestion[`title_${kindOfQuestions}`]}
      </h3>
      {currentQuestion.helper && (
        <h5 className="text-sm italic">{currentQuestion.helper}</h5>
      )}
    </div>
  );
}
interface CardQuestionProps {
  currentQuestion: Question;
}
