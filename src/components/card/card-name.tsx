import { useRef, useState } from "react";
import Button from "../ui/button";
import { QuizState } from "../../../definitions/definitions";
import { Dispatch, SetStateAction } from "react";

const CardName = ({ setQuizState }: CardNameProps) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  // Check User Name
  const checkUserName = () => {
    const name = nameInput.current?.value;
    if (name && name.trim().length > 0)
      setQuizState((prev) => ({ ...prev, name }));
    else setError("Merci d'entrer un nom.");
  };

  return (
    <div>
      <h3 className="text-2xl font-bold">Quel est votre nom ?</h3>
      <input
        ref={nameInput}
        type="text"
        className="w-full p-4 mt-8 mb-2 font-bold transition-all ease-in-out border-4 text-slate-100 rounded-xl drop-shadow-sm bg-emerald-600/80 border-emerald-700"
      />
      <div className="text-sm pl-2 text-red-500 mb-8">{error}</div>

      <Button text="Commencer" onClick={checkUserName} />
    </div>
  );
};

type CardNameProps = {
  setQuizState: Dispatch<SetStateAction<QuizState>>;
};

export default CardName;
