import { LightBulbIcon, IdentificationIcon } from "@heroicons/react/outline";

export default ({ score, type }: ScoreSquareProps) => {
  if (!score) score = 0;

  return (
    <div
      className={`py-6 px-10 bg-gradient-to-br from-pink-300/80 to-pink-300 rounded-2xl`}
    >
      <div className="flex flex-row items-center justify-between text-5xl text-pink-800/60">
        <div>
          <strong>{score ?? "N/A"}</strong>
        </div>
        <div>
          {type === "resp" ? (
            <LightBulbIcon className="w-10 text-pink-800/60" />
          ) : (
            <IdentificationIcon className="w-10 text-pink-800/60" />
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
