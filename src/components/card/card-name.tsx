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
    if (!name || !name.toString().trim().length)
      return setError("Merci d'entrer un nom.");

    if (!age) return setError("Merci d'entrer votre âge");

    dispatch(beginQuiz({ name: name.toString(), age: +age }));
  };

  // Check User Name
  // const checkUserName = () => {
  //   const name = nameInput.current?.value;

  //   // Name Guard
  //   if (!name || !name.trim().length) return setError("Merci d'entrer un nom.");

  //   // Begin Quiz if name is valid
  //   dispatch(beginQuiz(name));
  // };

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
          <Button text="Commencer" type="submit" />
        </Form>
      </div>
    </div>
  );
};

export default CardName;
