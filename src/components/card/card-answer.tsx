import { CardAnswerProps } from "../../../definitions/definitions";

export default function CardAnswer({ answer, checked }: CardAnswerProps) {
  return (
    <button className="px-6 py-4 text-left border-4 rounded-xl border-stone-200">
      <p>
        {checked && "✅"} {answer}
      </p>
    </button>
  );
}
