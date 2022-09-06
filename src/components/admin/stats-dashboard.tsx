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
    <div>
      <CardWrapper>
        <div className="flex flex-col gap-4">
          <div className="pl-2 mb-4">
            <Link to="/gpa-admin">Retour</Link>
          </div>
          <CardStat
            name="Total de réponses"
            number={adminStats?.count}
            icon={<UserIcon />}
          />
          <CardStat
            name="Âge moyen"
            number={getAverageAge()}
            icon={<UserIcon />}
          />
          <CardStat
            name="Moyenne adulte"
            number={getAverageAdult()}
            icon={<UserIcon />}
          />
          <CardStat
            name="Moyenne responsable"
            number={getAverageResp()}
            icon={<UserIcon />}
          />
          {/* <CardStat name="Temps moyen" number={12} icon={<UserIcon />} /> */}
        </div>
      </CardWrapper>
    </div>
  );
};
