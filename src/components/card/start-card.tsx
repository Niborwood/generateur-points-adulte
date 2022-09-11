import { useRef, useState, useEffect } from "react";
import Button from "../ui/button";
import { FormValues } from "../../../definitions/definitions";

// REDUX
import { useAppDispatch } from "../../hooks/redux";
import { beginQuiz, setStardCardTimer } from "../../features/quiz/quizSlice";

// COMPONENTS
import { Input, Form } from "../ui";

const StartCard = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    performance.now();
    return () => {
      dispatch(setStardCardTimer(Math.round(performance.now())));
    };
  }, []);

  const handleSubmit = (formValues: FormValues) => {
    const { name, age } = formValues;
    // Name check
    if (!name || !name.toString().trim().length)
      return setError("Merci d'entrer un nom.");
    // Age check
    if (!age || age.valueOf() < 0 || age.valueOf() > 100)
      return setError("Merci d'entrer votre âge");

    dispatch(
      beginQuiz({
        name: name.toString(),
        age: +age,
        createdAt: new Date().toISOString(),
      })
    );
  };

  return (
    <div>
      <div className="mt-0">
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            ref={nameInput}
            label="Quel est votre prénom ?"
            required
          />
          <Input
            type="number"
            name="age"
            label="Et votre âge ?"
            min={0}
            max={100}
            required
          />
          <div className="mb-4 pl-2 text-purple-500 text-sm">{error}</div>
          <Button text="Commencer" type="submit" full />
        </Form>
      </div>
    </div>
  );
};

export default StartCard;
