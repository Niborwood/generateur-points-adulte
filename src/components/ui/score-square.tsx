import { useCallback } from "react";
import { LightBulbIcon, IdentificationIcon } from "@heroicons/react/outline";
import { rangeAverage } from "../../utils";
import { useAppSelector } from "../../hooks/redux";

const AGES = [
  {
    label: "- de 18 ans",
    min: 0,
    max: 18,
  },
  {
    label: "18 à 25 ans",
    min: 18,
    max: 25,
  },
  {
    label: "26 à 35 ans",
    min: 26,
    max: 35,
  },
  {
    label: "36 à 50 ans",
    min: 36,
    max: 50,
  },
  {
    label: "+ de 50 ans",
    min: 51,
    max: 100,
  },
];

export default ({ type }: ScoreSquareProps) => {
  const {
    stats,
    score: scores,
    age: userAge,
    kindOfQuestions,
  } = useAppSelector((state) => state.quiz);
  const score = type === "adult" ? scores.adultScore : scores.respScore;

  // Display age range differencial
  const calculateAverageDiff = useCallback(() => {
    if (!stats) return;

    const userAgeRange = AGES.findIndex((age) => {
      return age.min <= userAge && age.max >= userAge;
    })!;

    const ageRangeAverages = stats[userAgeRange];
    const ageRangeAverage =
      type === "adult"
        ? ageRangeAverages.adult_score
        : ageRangeAverages.resp_score;

    if (!score || !ageRangeAverage) return;
    return rangeAverage(score * 100, ageRangeAverage, type, kindOfQuestions);
  }, [userAge, stats, score]);

  const scoreColor = {
    bg: "bg-red-200",
    text: "text-red-800/60",
    gradient: "from-red-300/80 to-red-300",
  };

  if (score && score >= 0.25 && score < 0.45) {
    scoreColor.bg = "bg-pink-200";
    scoreColor.text = "text-pink-800/60";
    scoreColor.gradient = "from-pink-300/80 to-pink-300";
  }

  if (score && score >= 0.45 && score < 0.55) {
    scoreColor.bg = "bg-stone-200";
    scoreColor.text = "text-stone-800/60";
    scoreColor.gradient = "from-stone-300/80 to-stone-300";
  }

  if (score && score >= 0.55 && score < 0.75) {
    scoreColor.bg = "bg-fuchsia-200";
    scoreColor.text = "text-fuchsia-800/60";
    scoreColor.gradient = "from-fuchsia-300/80 to-fuchsia-300";
  }

  if (score && score >= 0.75) {
    scoreColor.bg = "bg-purple-200";
    scoreColor.text = "text-purple-800/60";
    scoreColor.gradient = "from-purple-300/80 to-purple-300";
  }

  return (
    <div
      className={`p-10 bg-gradient-to-br ${scoreColor.gradient} rounded-2xl`}
    >
      <div
        className={`flex flex-row items-center justify-between text-5xl ${scoreColor.text}`}
      >
        <div>
          <strong>{score ? (score * 100).toFixed(1) : "N/A"}</strong>
          <span className="text-xl"> / 100</span>
        </div>
        <div>
          {type === "resp" ? (
            <LightBulbIcon className={`w-10 ${scoreColor.text}`} />
          ) : (
            <IdentificationIcon className={`w-10 ${scoreColor.text}`} />
          )}
        </div>
      </div>

      <p className="text-xl text-slate-900/80">
        Indice
        {type === "adult" ? " adulte" : " responsabilité"}
      </p>
      <p className="text-slate-900/80">{calculateAverageDiff()}</p>
      <hr className="m-4 border-slate-500/30" />
      <p className="text-xs italic text-slate-900/60">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
        nesciunt porro perferendis ipsam quidem odio aliquid repudiandae. Minima
        nihil ipsum perspiciatis, ad natus voluptates iusto molestiae beatae
        accusantium magnam illo sequi fugit qui laudantium. Qui impedit
        excepturi deleniti alias corrupti quisquam itaque dolorem labore magnam.
        Qui expedita vel maxime aperiam sunt reiciendis reprehenderit dolore
        non! Sed laudantium fuga molestiae repellendus.
      </p>
    </div>
  );
};

interface ScoreSquareProps {
  type: "adult" | "resp";
}
