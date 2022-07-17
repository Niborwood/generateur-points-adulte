import Button from "../ui/button";
import { QuizState } from "../../../definitions/definitions";
import { Dispatch, SetStateAction } from "react";

const CardName = ({ setQuizState, setHasSetName }: CardNameProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">Quel est votre nom ?</h3>
      <input
        type="text"
        className="w-full p-4 mt-8 mb-2 font-bold transition-all ease-in-out border-2 text-slate-900 rounded-xl drop-shadow-sm bg-purple-600/40 border-fuchsia-600"
        onChange={(e) =>
          setQuizState((prev: QuizState) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      <Button text="Commencer" onClick={() => setHasSetName(true)} />
    </div>
  );
};

type CardNameProps = {
  setQuizState: Dispatch<SetStateAction<QuizState>>;
  setHasSetName: Dispatch<SetStateAction<boolean>>;
};

export default CardName;
