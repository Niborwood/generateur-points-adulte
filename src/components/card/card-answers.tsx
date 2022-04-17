import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";

// DEFINITIONS
import { CardAnswersProps } from "../../../definitions/definitions";

// COMPONENT IMPORTS
import CardAnswer from "./card-answer";

export default function CardAnswers({
  answers,
  selectedAnswer,
  setSelectedAnswer,
}: CardAnswersProps) {
  return (
    <RadioGroup
      className="flex flex-row flex-wrap justify-start gap-4 px-4"
      value={selectedAnswer}
      onChange={setSelectedAnswer}
    >
      {answers.map((answer) => (
        <RadioGroup.Option key={answer._id} value={answer}>
          {({ checked }) => (
            <CardAnswer checked={checked} answer={answer.answer} />
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
