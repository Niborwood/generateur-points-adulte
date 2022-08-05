export default function AnswerButton({ answer, checked }: AnswerButtonProps) {
  return (
    <button
      className={`px-6 py-4 font-medium text-center border-4 rounded-xl border-stone-200 transition-all ease-in-out ${
        checked && "bg-emerald-600 text-stone-100 border-emerald-600"
      }`}
    >
      <p>{answer}</p>
    </button>
  );
}
interface AnswerButtonProps {
  answer: string;
  checked: boolean;
}
