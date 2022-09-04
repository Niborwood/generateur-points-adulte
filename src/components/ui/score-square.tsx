import { useCallback } from "react";
import { LightBulbIcon, IdentificationIcon } from "@heroicons/react/outline";
import { rangeAverage } from "../../utils";
import { useAppSelector } from "../../hooks/redux";

export default ({ type }: ScoreSquareProps) => {
  const {
    stats,
    score: scores,
    age: userAge,
    kindOfQuestions,
    ages,
    answersSubjects,
  } = useAppSelector((state) => state.quiz);
  const score = type === "adult" ? scores.adultScore : scores.respScore;

  // Display age range differencial
  const calculateAverageDiff = useCallback(() => {
    if (!stats) return;

    const userAgeRange = ages.findIndex((age) => {
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

  if (score && score >= 0.3 && score < 0.45) {
    scoreColor.bg = "bg-pink-200";
    scoreColor.text = "text-pink-800/60";
    scoreColor.gradient = "from-pink-300/80 to-pink-300";
  }

  if (score && score >= 0.45 && score < 0.55) {
    scoreColor.bg = "bg-slate-200";
    scoreColor.text = "text-slate-800/60";
    scoreColor.gradient = "from-slate-300/80 to-slate-300";
  }

  if (score && score >= 0.55 && score < 0.7) {
    scoreColor.bg = "bg-fuchsia-200";
    scoreColor.text = "text-fuchsia-800/60";
    scoreColor.gradient = "from-fuchsia-300/80 to-fuchsia-300";
  }

  if (score && score >= 0.7) {
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
            <LightBulbIcon
              className={`w-16 rounded-full p-2 ${scoreColor.bg} ${scoreColor.text}`}
            />
          ) : (
            <IdentificationIcon
              className={`w-16 rounded-full p-2 ${scoreColor.bg} ${scoreColor.text}`}
            />
          )}
        </div>
      </div>

      <p className="text-xl text-slate-900/80">
        Indice
        {type === "adult" ? " adulte" : " responsabilité"}
      </p>
      <p className="text-slate-900/80">
        {calculateAverageDiff()} {kindOfQuestions ? "Tu es" : "Vous êtes"} très{" "}
        {type === "adult" ? "adulte" : "responsable"} sur{" "}
        <strong>
          {answersSubjects[
            type === "adult" ? "adultMax" : "respMax"
          ].toLowerCase()}
        </strong>{" "}
        et peu {type === "adult" ? "adulte" : "responsable"} sur{" "}
        <strong>
          {answersSubjects[
            type === "adult" ? "adultMin" : "respMin"
          ].toLowerCase()}
        </strong>
        .
      </p>
      <hr className="m-4 border-slate-500/30" />
      <div className="space-y-2 text-xs italic text-slate-900/60">
        <p>
          Le score n'indique pas {kindOfQuestions ? "ton" : "votre"} âge mais{" "}
          {kindOfQuestions ? "ton" : "votre"} niveau{" "}
          {type === "adult" ? "d'adulte" : "de responsabilité"} sur une échelle
          de 0 à 100, 0 étant la valeur minimale et 100 la valeur maximale.
        </p>
        <p>
          {type === "adult"
            ? `Cet indice agrège ${
                kindOfQuestions ? "tes" : "vos"
              } réponses relatives
          à ${kindOfQuestions ? "tes" : "vos"} conditions et à 
          ${
            kindOfQuestions ? "tes" : "vos"
          } habitudes. Plus la valeur est proche
          de 100, plus ${kindOfQuestions ? "tu es" : "vous êtes"} une personne
          avec des façons de faire qui sont spécifiques à l’âge adulte, peu
          importe ${kindOfQuestions ? "ta" : "votre"} capacité d’anticipation ou
          l’engagement que ${kindOfQuestions ? "tu mets" : "vous mettez"} dans
          celles-ci.`
            : `Cet indice synthèse  ${
                kindOfQuestions ? "ta" : "votre"
              } capacité à anticiper ${
                kindOfQuestions ? "tes" : "vos"
              } actions et à être dans une situation confortable. Plus la valeur est proche de 100, plus ${
                kindOfQuestions ? "tu es" : "vous êtes"
              } une personne faisant preuve d’autonomie qui met en œuvre des actions pour prévoir les aléas de la vie.`}
        </p>
      </div>
    </div>
  );
};

interface ScoreSquareProps {
  type: "adult" | "resp";
}
