// DEFINITIONS
import { CardQuestionProps } from "../../../definitions/definitions";

export default function CardQuestion({
  _id,
  title,
  category,
}: CardQuestionProps) {
  return (
    <h3 className="px-6 mb-8 text-2xl font-bold">
      {_id}/ {title}
    </h3>
  );
}
