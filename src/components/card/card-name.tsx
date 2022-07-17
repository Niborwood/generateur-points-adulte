import Button from "../ui/button";
import { QuizState } from "../../../definitions/definitions";
import { Dispatch, SetStateAction } from "react";

const CardName = ({ setQuizState }: CardNameProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Quel est votre nom ?</h3>
      <input
        type="text"
        className="w-full p-4 mt-8 mb-2 font-bold transition-all ease-in-out border-4 text-slate-100 rounded-xl drop-shadow-sm bg-emerald-600/80 border-emerald-700"
        onChange={(e) =>
          setQuizState((prev: QuizState) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      <Button
        text="Commencer"
        onClick={() =>
          setQuizState((prev) => ({
            ...prev,
            hasSetName: true,
          }))
        }
      />
    </div>
  );
};

type CardNameProps = {
  setQuizState: Dispatch<SetStateAction<QuizState>>;
};

export default CardName;
