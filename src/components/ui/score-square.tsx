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
    console.log(score * 100, ageRangeAverage);
    return rangeAverage(score * 100, ageRangeAverage, type);
  }, [userAge, stats, score]);

  console.log(calculateAverageDiff());

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
      className={`py-6 px-10 bg-gradient-to-br ${scoreColor.gradient} rounded-2xl`}
    >
      <div
        className={`flex flex-row items-center justify-between text-5xl ${scoreColor.text}`}
      >
        <div>
          <strong>{(score * 100).toFixed(1) ?? "N/A"}</strong>
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
      <p className="text-xs italic text-slate-900/60">
        0 indique la valeur minimale, 100 la valeur maximale.
      </p>
    </div>
  );
};

interface ScoreSquareProps {
  type: "adult" | "resp";
}
