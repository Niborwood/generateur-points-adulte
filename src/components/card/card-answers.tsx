import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// DEFINITIONS
import { CardAnswersProps } from "../../../definitions/definitions";

// COMPONENT IMPORTS
import CardAnswer from "./card-answer";

export default function CardAnswers({ answers }: CardAnswersProps) {
  const [answer, setAnswer] = useState("");
  return (
    <RadioGroup className="px-4 space-y-2" value={answer} onChange={setAnswer}>
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
