import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// COMPONENT IMPORTS
import Answer from "./card-answer";

export default function CardAnswers() {
  const [answer, setAnswer] = useState("startup");
  return (
    <RadioGroup className="px-4 space-y-2" value={answer} onChange={setAnswer}>
      <RadioGroup.Option value="startup">
        {({ checked }) => <Answer checked={checked}>Startup</Answer>}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => <Answer checked={checked}>Business</Answer>}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => <Answer checked={checked}>Enterprise</Answer>}
      </RadioGroup.Option>
    </RadioGroup>
  );
}
