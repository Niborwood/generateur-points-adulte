import { Answer } from "../../../definitions/definitions";

import { Input } from "../ui";
import { MinusCircleIcon } from "@heroicons/react/solid";

const AnswerItem = ({ answer, index, deleteAnswer }: AnswerItemProps) => {
  return (
    <div className="pl-4 font-bold text-white shadow-sm shadow-purple-300 rounded-xl bg-gradient-to-tl from-purple-600 to-purple-900">
      <Input
        type="hidden"
        name={`asw_${index}__id`}
        defaultValue={answer._id?.toString()}
      />
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="flex-1 py-1">
          <Input
            type="text"
            defaultValue={answer.answer}
            name={`asw_${index}_answer`}
            editable
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-14">
            <Input
              name={`asw_${index}_resp_score`}
              type="number"
              defaultValue={answer.respScore?.toString()}
              label="Resp."
              labelColor="white"
              small
            />
          </div>
          <div className="w-14">
            <Input
              name={`asw_${index}_adult_score`}
              type="number"
              defaultValue={answer.adultScore?.toString()}
              label="Adulte"
              small
            />
          </div>
        </div>
        <button
          className="flex items-center self-stretch px-3 bg-red-600/70 rounded-r-xl"
          onClick={() => deleteAnswer(index)}
        >
          <MinusCircleIcon className="w-5 text-slate-100" />
        </button>
      </div>
    </div>
  );
};

interface AnswerItemProps {
  answer: Answer;
  index: number;
  deleteAnswer: (index: number) => void;
}

export default AnswerItem;
