import { ReactNode } from "react";

export default ({ name, number, icon }: CardStatProps) => {
  return (
    <div className="flex flex-row justify-between flex-1 p-6 bg-pink-200 rounded-xl ">
      <div className="text-2xl font-bold">{name}</div>
      <div className="flex flex-row items-center gap-2 text-xl">
        {number ?? "N/A"} <div className="w-8">{icon}</div>
      </div>
    </div>
  );
};

interface CardStatProps {
  name: string;
  number?: number;
  icon: ReactNode;
}
