import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";

export default function Card() {
  return (
    <div className="relative px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-y-1">
      <CardQuestion />
      <CardAnswers />
    </div>
  );
}
