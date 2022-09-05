import { useEffect, useRef, useCallback } from "react";
import { toPng } from "html-to-image";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { getScore, clearQuiz } from "../../features/quiz/quizSlice";
import { fetchStats, sendStats } from "../../features/quiz/quizThunks";

// UI
import { ScoreSquare, Button, CardWrapper } from "../ui";
import {
  ArrowCircleRightIcon,
  LightBulbIcon,
  IdentificationIcon,
} from "@heroicons/react/solid";

const CardScore = () => {
  const shareRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const {
    answers,
    name,
    age: userAge,
    stats,
    kindOfQuestions,
    ages,
  } = useAppSelector((state) => state.quiz);

  const handleClearQuiz = () => {
    dispatch(clearQuiz());
  };

  useEffect(() => {
    dispatch(getScore());
    dispatch(sendStats());
    dispatch(fetchStats());
  }, [answers]);

  const handleShareClick = useCallback(() => {
    if (!shareRef.current) return;

    toPng(shareRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [shareRef]);

  return (
    <div>
      <div className="flex flex-col items-center gap-8 mb-4 lg:items-start lg:flex-row">
        {/* Player score */}
        <CardWrapper>
          <div className="p-2 bg-slate-100" ref={shareRef}>
            <p className="mb-4 text-3xl font-bold text-center">
              {name}, <br />
              voici {kindOfQuestions ? "tes" : "vos"} résultats :{" "}
            </p>
            <div className="flex flex-col gap-4 mt-8 space-between">
              <ScoreSquare type="adult" />
              <ScoreSquare type="resp" />
            </div>
          </div>
        </CardWrapper>

        {/* Average scores */}
        <CardWrapper>
          {stats && (
            <div className="w-full">
              <p className="mt-2 mb-8 text-3xl font-bold text-center">
                Moyenne par <br /> tranche d'âge
              </p>
              <div className="flex flex-col gap-2">
                {ages.map((age, index) => (
                  <div
                    className={`flex flex-row p-4 justify-between items-center ${
                      index % 2 ? "bg-purple-200/80" : "bg-purple-200/30"
                    } ${
                      age.min <= userAge &&
                      age.max >= userAge &&
                      "bg-fuchsia-500/60 py-8 px-4"
                    } rounded-xl`}
                    key={age.label}
                  >
                    <div className="flex flex-row items-center justify-center">
                      <ArrowCircleRightIcon className="w-4 mr-3 text-fuchsia-700/80" />
                      <p className="font-bold">
                        {age.min <= userAge && age.max >= userAge && (
                          <>
                            <span className="font-thin text-md">
                              Ma tranche d'âge
                            </span>
                            <br />
                          </>
                        )}
                        {age.label}
                      </p>
                    </div>
                    <div className="flex flex-row gap-2 font-bold text-fuchsia-700/80">
                      <div className="min-w-[50px] flex flex-col justify-center items-center">
                        <IdentificationIcon className="w-8" />{" "}
                        {stats[index].adult_score ?? "N/A"}
                      </div>
                      <div className="min-w-[50px] flex flex-col justify-center items-center">
                        <LightBulbIcon className="w-8 text-center" />{" "}
                        {stats[index].resp_score ?? "N/A"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardWrapper>
      </div>
      {/* Clear Quiz */}
      <div className="flex justify-center gap-4">
        <Button
          text="Refaire le quiz"
          onClick={handleClearQuiz}
          style="light"
        />
        {/* <Button
          text="Partager le résultat"
          onClick={handleShareClick}
          style="light"
        /> */}
      </div>
    </div>
  );
};

export default CardScore;
