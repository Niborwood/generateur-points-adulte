import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";

// DEFINITIONS
import { CardAnswersProps } from "../../../definitions/definitions";

// COMPONENT IMPORTS
import CardAnswer from "./card-answer";

export default function CardAnswers({ answers }: CardAnswersProps) {
  const [answer, setAnswer] = useState("");

  // Reset answers
  useEffect(() => {
    setAnswer("");
  }, [answers]);

  return (
    <RadioGroup
      className="flex flex-row flex-wrap justify-start gap-4 px-4"
      value={answer}
      onChange={setAnswer}
    >
      {answers.map((answer) => (
        <RadioGroup.Option value={answer.score}>
          {({ checked }) => (
            <CardAnswer checked={checked} answer={answer.answer} />
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
