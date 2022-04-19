// DEFINITIONS
import { CardQuestionProps } from "../../../definitions/definitions";

export default function CardQuestion({
  _id,
  title,
  category,
  helper,
}: CardQuestionProps) {
  return (
    <div className="px-6 mb-8">
      <h3 className="text-2xl font-bold">
        {_id}/ {title}
      </h3>
      {helper && <h5 className="text-sm italic">{helper}</h5>}
    </div>
  );
}
