import { useRef, useState } from "react";
import Button from "../ui/button";

// REDUX
import { useAppDispatch } from "../../hooks/redux";
import { beginQuiz } from "../../features/quiz/quizSlice";

// COMPONENTS
import { Input } from "../ui";

const CardName = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  // Check User Name
  const checkUserName = () => {
    const name = nameInput.current?.value;

    // Name Guard
    if (!name || !name.trim().length) return setError("Merci d'entrer un nom.");

    // Begin Quiz if name is valid
    dispatch(beginQuiz(name));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold">Quel est votre nom ?</h3>
      <div className="mt-8">
        <Input name="name" ref={nameInput} error={error} />
      </div>
      <Button text="Commencer" onClick={checkUserName} />
    </div>
  );
};

export default CardName;
