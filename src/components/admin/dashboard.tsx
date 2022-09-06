import { Link } from "react-router-dom";
import { Title } from "../ui";
import {
  ChartSquareBarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

const Dashboard = () => {
  return (
    <div className="my-4 space-y-8">
      <div className="text-center">
        <Title title="DASHBOARD" size="5xl" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Link
          to="/gpa-admin/stats"
          className="flex-1 p-8 text-3xl tracking-wide uppercase transition-all bg-purple-500 shadow-md font-headings text-slate-100 rounded-xl hover:bg-purple-600"
        >
          <ChartSquareBarIcon className="w-20 mb-4" /> Stats
        </Link>
        <Link
          to="/gpa-admin/questions"
          className="flex-1 p-8 text-3xl tracking-wide uppercase transition-all bg-purple-500 shadow-md font-headings text-slate-100 rounded-xl hover:bg-purple-600"
        >
          <QuestionMarkCircleIcon className="w-20 mb-4" /> Questions
        </Link>
      </div>
    </div>
  );
};

// ANSWER ITEM

export default Dashboard;
