export default function CardAnswer({ answer, checked }: CardAnswerProps) {
  return (
    <button
      className={`px-6 py-4 text-left font-medium border-4 rounded-xl border-stone-200 transition-all ease-in-out ${
        checked && "bg-emerald-600 text-stone-100 border-emerald-600"
      }`}
    >
      <p>{answer}</p>
    </button>
  );
}
interface CardAnswerProps {
  answer: string;
  checked: boolean;
}
