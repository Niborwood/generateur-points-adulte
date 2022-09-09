import { useEffect } from "react";
import { CardWrapper, CardStat } from "../ui";
import {
  UserIcon,
  CheckCircleIcon,
  LightBulbIcon,
  IdentificationIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchAdminStats } from "../../features/quiz/quizThunks";

export default () => {
  const dispatch = useAppDispatch();
  const { adminStats } = useAppSelector((state) => state.quiz);

  useEffect(() => {
    dispatch(fetchAdminStats());
  }, []);

  return (
    <div className="space-y-8 w-full">
      <div className="pl-2 mb-4">
        <Link
          className="text-slate-100 inline-flex flex-row gap-2 items-center"
          to="/gpa-admin"
        >
          <ArrowCircleLeftIcon className="w-4" /> Retour
        </Link>
      </div>
      <CardWrapper>
        <div className="flex flex-col gap-4">
          <CardStat
            name="Total de réponses"
            number={adminStats?.totals.total_answers}
            icon={<CheckCircleIcon />}
          />
          <CardStat
            name="Âge moyen"
            number={adminStats?.totals.age_average}
            icon={<UserIcon />}
          />
          <CardStat
            name="Moyenne adulte"
            number={adminStats?.totals.adult_average}
            icon={<IdentificationIcon />}
          />
          <CardStat
            name="Moyenne responsable"
            number={adminStats?.totals.resp_average}
            icon={<LightBulbIcon />}
          />
          {/* <CardStat name="Temps moyen" number={12} icon={<UserIcon />} /> */}
        </div>
      </CardWrapper>

      <CardWrapper large>
        <table className="table-fixed sm:table-auto w-full text-xs sm:text-sm">
          <thead className="border-b-2">
            <tr>
              <th className="text-left py-4 px-2">Prénom</th>
              <th className="text-center sm:text-right">Âge</th>
              <th className="text-right">Date</th>
              <th className="text-right">Heure</th>
              <th className="text-right">Adul.</th>
              <th className="text-right">Resp.</th>
            </tr>
          </thead>
          <tbody>
            {adminStats?.data.map((stat, index) => (
              <tr
                className={`${index % 2 ? "bg-purple-100" : ""}`}
                key={stat.id}
              >
                <td className="py-2 px-1">{stat.name}</td>
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
