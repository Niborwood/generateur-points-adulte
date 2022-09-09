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
  console.log(
    "🚀 ~ file: stats-dashboard.tsx ~ line 13 ~ adminStats",
    adminStats
  );

  useEffect(() => {
    dispatch(fetchAdminStats());
  }, []);

  return (
    <div className="space-y-8">
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

      <CardWrapper>
        <div className="flex flex-col gap-2">
          {adminStats?.data.map((user) => {
            return (
              <div
                className="flex flex-row justify-between p-2 bg-pink-100 rounded-md"
                key={user.id}
              >
                <div className="flex flex-row gap-2">
                  <div>{user.name}</div>
                  <div>{user.age}</div>
                </div>
                <div className="flex flex-row gap-2 text-right">
                  <div className="flex-1">{user.score.adultScore}</div>
                  <div className="flex-1">{user.score.respScore}</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardWrapper>
    </div>
  );
};
