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
      <div className="items-center mb-12 space-y-4 text-3xl font-thin tracking-wider prose text-center md:space-y-8 md:text-5xl lg:mt-20 lg:text-6xl text-slate-100 font-headings">
        <p>
          Mesurez si vous etes <br /> adulte et responsable.
        </p>
        <p className="text-base tracking-wide md:text-xl">
          Peu importe votre age.
        </p>
      </div>
      <Button text="Lancer le test" style="light" onClick={handleLaunchClick} />
    </div>
  );
};
