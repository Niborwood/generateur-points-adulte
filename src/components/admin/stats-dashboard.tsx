import { useEffect } from "react";
import { CardWrapper, CardStat, Loading } from "../ui";
import {
  UserIcon,
  CheckCircleIcon,
  LightBulbIcon,
  IdentificationIcon,
  ArrowCircleLeftIcon,
  ArrowCircleDownIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { FilterButton } from "./filter-button";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { reorderStatsData } from "../../features/admin/adminSlice";
import { fetchAdminStats } from "../../features/admin/adminThunks";

export default () => {
  const dispatch = useAppDispatch();
  const { data, totals, isLoading } = useAppSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminStats());
  }, []);

  if (isLoading) return <Loading />;

  const handleOrderData = (id: "name" | "age" | "date" | "adult" | "resp") => {
    dispatch(reorderStatsData(id));
  };

  const statCards: {
    key:
      | "total_answers"
      | "age_average"
      | "adult_average"
      | "resp_average"
      | "min_adult"
      | "max_adult"
      | "min_resp"
      | "max_resp"
      | "min_age"
      | "max_age";
    label: string;
    icon: JSX.Element;
    withPb?: boolean;
  }[] = [
    {
      key: "total_answers",
      label: "Total de réponses",
      icon: <CheckCircleIcon />,
      withPb: true,
    },
    {
      key: "age_average",
      label: "Âge moyen",
      icon: <UserIcon />,
    },
    {
      key: "min_age",
      label: "Âge minimum",
      icon: <ArrowCircleDownIcon />,
    },
    {
      key: "max_age",
      label: "Âge maximum",
      icon: <ArrowCircleUpIcon />,
      withPb: true,
    },
    {
      key: "adult_average",
      label: "Moyenne adulte",
      icon: <IdentificationIcon />,
    },
    {
      key: "min_adult",
      label: "Score adulte minimum",
      icon: <IdentificationIcon />,
    },
    {
      key: "max_adult",
      label: "Score adulte maximum",
      icon: <IdentificationIcon />,
      withPb: true,
    },
    {
      key: "resp_average",
      label: "Moyenne responsable",
      icon: <LightBulbIcon />,
    },
    {
      key: "min_resp",
      label: "Score resp minimum",
      icon: <LightBulbIcon />,
    },
    {
      key: "max_resp",
      label: "Score resp maximum",
      icon: <LightBulbIcon />,
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 space-y-8 xl:flex-row">
      <div className="pl-2 mb-4">
        <Link
          className="inline-flex flex-row items-center gap-2 text-slate-100"
          to="/gpa-admin"
        >
          <ArrowCircleLeftIcon className="w-4" /> Retour
        </Link>
      </div>
      <CardWrapper large>
        <div className="flex flex-col w-full gap-4">
          {statCards.map((card) => (
            <CardStat
              key={card.key}
              name={card.label}
              number={totals?.[card.key]}
              icon={card.icon}
              withPb={!!card.withPb}
            />
          ))}
        </div>
      </CardWrapper>
      <CardWrapper large>
        <table className="w-full text-xs table-fixed sm:table-auto sm:text-sm">
          <thead className="border-b-2">
            <tr>
              <th className="px-0 py-4 sm:px-2">
                <FilterButton
                  id="name"
                  label="Prénom"
                  onClick={() => handleOrderData("name")}
                  justify="start"
                />
              </th>
              <th className="text-center sm:text-right">
                <FilterButton
                  id="age"
                  label="Âge"
                  onClick={() => handleOrderData("age")}
                />
              </th>
              <th className="text-right">
                <FilterButton
                  id="date"
                  label="Date"
                  onClick={() => handleOrderData("date")}
                />
              </th>
              <th className="text-right">Heure</th>
              <th className="text-right">
                <FilterButton
                  id="adult"
                  label="Adul."
                  onClick={() => handleOrderData("adult")}
                />
              </th>
              <th className="text-right">
                <FilterButton
                  id="resp"
                  label="Resp."
                  onClick={() => handleOrderData("resp")}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((stat, index) => (
              <tr
                className={`${index % 2 ? "bg-purple-100" : ""}`}
                key={stat.id}
              >
                <td className="px-1 py-2">{stat.name}</td>
                <td className="text-center sm:text-right">{stat.age}</td>
                <td className="text-right">
                  {new Date(stat.createdAt).toLocaleDateString("fr", {
                    year: "2-digit",
                    month: "2-digit",
                    day: "numeric",
                  })}
                </td>
                <td className="text-right">
                  {new Date(stat.createdAt).toLocaleTimeString("fr", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </td>
                <td className="text-right">
                  {(stat.score.adultScore * 100).toFixed(1)}
                </td>
                <td className="text-right">
                  {(stat.score.respScore * 100).toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardWrapper>
    </div>
  );
};
