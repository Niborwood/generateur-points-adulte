import { useEffect } from "react";
import { CardWrapper, CardStat } from "../ui";
import { UserIcon } from "@heroicons/react/outline";
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

  // Get average of adminStats.data.age
  const getAverageAge = () => {
    if (adminStats) {
      const total = adminStats.data.reduce((acc, curr) => {
        return acc + curr.age;
      }, 0);
      return Math.round(total / adminStats.data.length);
    }
  };

  useEffect(() => {
    console.log("here");
    dispatch(fetchAdminStats());
  }, []);

  const getAverageResp = () => {
    if (adminStats) {
      const total = adminStats.data.reduce((acc, curr) => {
        return acc + curr.score.respScore;
      }, 0);
      return Math.round((total / adminStats.data.length) * 100) / 100;
    }
  };

  const getAverageAdult = () => {
    if (adminStats) {
      const total = adminStats.data.reduce((acc, curr) => {
        return acc + curr.score.adultScore;
      }, 0);
      return Math.round((total / adminStats.data.length) * 100) / 100;
    }
  };

  return (
    <div className="space-y-8">
      <CardWrapper>
        <div className="flex flex-col gap-4">
          <div className="pl-2 mb-4">
            <Link to="/gpa-admin">Retour</Link>
          </div>
          <CardStat
            name="Total de réponses"
            number={adminStats?.totals.total_answers}
            icon={<UserIcon />}
          />
          <CardStat
            name="Âge moyen"
            number={adminStats?.totals.age_average}
            icon={<UserIcon />}
          />
          <CardStat
            name="Moyenne adulte"
            number={adminStats?.totals.adult_average}
            icon={<UserIcon />}
          />
          <CardStat
            name="Moyenne responsable"
            number={adminStats?.totals.resp_average}
            icon={<UserIcon />}
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
