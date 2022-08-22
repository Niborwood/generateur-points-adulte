import { LightBulbIcon, IdentificationIcon } from "@heroicons/react/outline";

export default ({ score, type }: ScoreSquareProps) => {
  if (!score) score = 0;

  const scoreColor = {
    bg: "bg-red-200",
    text: "text-red-800/60",
    gradient: "from-red-300/80 to-red-300",
  };

  if (score >= 0.2 && score < 0.45) {
    scoreColor.bg = "bg-pink-200";
    scoreColor.text = "text-pink-800/60";
    scoreColor.gradient = "from-pink-300/80 to-pink-300";
  }

  if (score >= 0.45 && score < 0.55) {
    scoreColor.bg = "bg-stone-200";
    scoreColor.text = "text-stone-800/60";
    scoreColor.gradient = "from-stone-300/80 to-stone-300";
  }

  if (score >= 0.55 && score < 0.8) {
    scoreColor.bg = "bg-fuchsia-200";
    scoreColor.text = "text-fuchsia-800/60";
    scoreColor.gradient = "from-fuchsia-300/80 to-fuchsia-300";
  }

  if (score >= 0.8) {
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
          <strong>{score ?? "N/A"}</strong>
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
        0 indique la valeur minimale, 1 la valeur maximale.
      </p>
    </div>
  );
};

interface ScoreSquareProps {
  score: number | null;
  type: "adult" | "resp";
}
