import { useState } from "react";
import { Answer } from "../../../definitions/definitions";

import { Input } from "../ui";

interface AnswerItemProps {
  answer: Answer;
}

const AnswerItem = ({ answer }: AnswerItemProps) => {
  return (
    <div className="px-4 py-2 font-bold text-white rounded-xl bg-gradient-to-tl from-purple-600 to-purple-900">
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <Input
            type="text"
            defaultValue={answer.answer}
            name="answer"
            editable
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-14">
            <Input
              name="respScore"
              type="number"
              defaultValue={answer.respScore?.toString()}
              label="Resp."
              labelColor="white"
              small
            />
          </div>
          <div className="w-14">
            <Input
              name="adultScore"
              type="number"
              defaultValue={answer.adultScore?.toString()}
              label="Adulte"
              small
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerItem;
