import { ReactNode } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";

export const FilterButton = ({
  label,
  onClick,
  justify = "end",
  step = "idle",
}: FilterButtonProps) => {
  return (
    <button
      className={`flex flex-row justify-${justify} w-full gap-2 font-bold items-center`}
      onClick={onClick}
    >
      {label} <ArrowDownIcon className="w-4" />
    </button>
  );
};

interface FilterButtonProps {
  label: string;
  onClick: () => void;
  justify?: "start" | "end";
  step?: "idle" | "asc" | "desc";
}
