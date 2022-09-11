import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

export const FilterButton = ({
  id,
  label,
  onClick,
  justify = "end",
}: FilterButtonProps) => {
  const { sortBy } = useAppSelector((state) => state.admin);
  const { order } = sortBy.find((s) => s.id === id) || {};

  return (
    <button
      className={`flex flex-row justify-${justify} w-full gap-2 font-bold items-center`}
      onClick={onClick}
    >
      {label}{" "}
      {order === "asc" ? (
        <ArrowUpIcon className="w-4" />
      ) : (
        <ArrowDownIcon className="w-4" />
      )}
    </button>
  );
};

interface FilterButtonProps {
  id: "name" | "age" | "date" | "adult" | "resp";
  label: string;
  onClick: () => void;
  justify?: "start" | "end";
}
