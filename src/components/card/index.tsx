// DEFINITIONS
import { CardProps } from "../../../definitions/definitions";

// IMPORTS
import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";

export default function Card({ question, goToNextQuestion }: CardProps) {
  return (
    <div className="relative px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-y-1">
      <CardQuestion
        _id={question._id}
        title={question.title}
        category={question.category}
      />
      <CardAnswers answers={question.answers} />
      <button onClick={goToNextQuestion}>Valider</button>
    </div>
  );
}
