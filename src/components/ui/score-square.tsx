import { LightBulbIcon, IdentificationIcon } from "@heroicons/react/outline";

export default ({ score, type }: ScoreSquareProps) => {
  if (!score) score = 0;

  return (
    <div
      className={`p-4 bg-gradient-to-br from-red-300/80 to-red-300 rounded-2xl`}
    >
      <div className="flex flex-row items-center justify-between text-5xl text-red-800/60">
        <div>
          <strong>{score ?? "N/A"}</strong>
        </div>
        <div>
          {type === "resp" ? (
            <LightBulbIcon className="w-10 text-red-800/60" />
          ) : (
            <IdentificationIcon className="w-10 text-red-800/60" />
          )}
        </div>
      </div>

      <p className="text-xl text-slate-900/80">
        Indice
        {type === "adult" ? " adulte" : " responsabilité"}
      </p>
    </div>
  );
};

interface ScoreSquareProps {
  score: number | null;
  type: "adult" | "resp";
}
