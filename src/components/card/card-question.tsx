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
interface CardQuestionProps {
  _id: number;
  title: string;
  category: string;
  helper?: string;
}
