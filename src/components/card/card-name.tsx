import { useRef, useState } from "react";
import Button from "../ui/button";
import { FormValues } from "../../../definitions/definitions";

// REDUX
import { useAppDispatch } from "../../hooks/redux";
import { beginQuiz } from "../../features/quiz/quizSlice";

// COMPONENTS
import { Input, Form } from "../ui";

const CardName = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (formValues: FormValues) => {
    const { name, age } = formValues;
    // Name check
    if (!name || !name.toString().trim().length)
      return setError("Merci d'entrer un nom.");
    // Age check
    if (!age) return setError("Merci d'entrer votre âge");

    dispatch(beginQuiz({ name: name.toString(), age: +age }));
  };

  return (
    <div>
      <h3 className="text-2xl font-bold">Avant de commencer</h3>
      <div className="mt-8">
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            ref={nameInput}
            error={error}
            label="Quel est votre prénom ?"
          />
          <Input type="number" name="age" label="Et votre âge ?" />
          <Button text="Commencer" type="submit" full />
        </Form>
      </div>
    </div>
  );
};

export default CardName;
