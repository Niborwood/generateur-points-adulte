import { Fragment, Dispatch, SetStateAction } from "react";
import { RadioGroup } from "@headlessui/react";

// TYPES
import { Answer } from "../../../definitions/definitions";

// COMPONENT IMPORTS
import AnswerButton from "./answer-button";

export default function AnswerButtons({
  answers,
  selectedAnswer,
  setSelectedAnswer,
  color,
}: AnswerButtonsProps) {
  return (
    <Fragment>
      {color && (
        <div
          style={{ background: color }}
          className={`w-full h-32 my-8 rounded-lg border-4`}
        />
      )}
      <RadioGroup
        className="flex flex-col flex-wrap items-center justify-center gap-4 px-4 md:flex-row"
        value={selectedAnswer}
        onChange={setSelectedAnswer}
      >
        {answers.map((answer) => (
          <RadioGroup.Option key={answer._id} value={answer}>
            {({ checked }) => (
              <AnswerButton checked={checked} answer={answer.answer} />
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </Fragment>
  );
}
interface AnswerButtonsProps {
  answers: Answer[];
  selectedAnswer: Answer | null;
  setSelectedAnswer: Dispatch<SetStateAction<Answer | null>>;
  color: string | undefined;
}
