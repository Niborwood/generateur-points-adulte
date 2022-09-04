import { Button } from "../ui";
import { useAppDispatch } from "../../hooks/redux";

import { launchQuiz } from "../../features/quiz/quizSlice";

export default () => {
  const dispatch = useAppDispatch();
  const handleLaunchClick = () => {
    dispatch(launchQuiz());
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-2/3">
      <div className="items-center mb-12 space-y-4 text-2xl font-thin tracking-wide prose text-center md:space-y-8 md:text-5xl lg:mt-20 lg:text-6xl text-slate-100 font-headings">
        <p className="">Mesurez si vous etes adulte et responsable.</p>
        <p className="text-sm tracking-normal md:text-xl">
          Peu importe votre age.
        </p>
      </div>
      <Button text="Lancer le test" style="light" onClick={handleLaunchClick} />
    </div>
  );
};
