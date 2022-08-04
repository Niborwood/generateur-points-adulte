// COMPONENT IMPORTS
import Header from "./components/header";
import { Outlet } from "react-router-dom";

// REDUX
import { useAppSelector } from "./hooks/redux";

function App() {
  const { hasSetName, hasEndedQuiz } = useAppSelector((state) => state.quiz);
  return (
    <div className="flex-col min-h-screen font-regular bg-gradient-to-bl from-purple-700 via-fuchsia-700 to-pink-700">
      {(!hasSetName || hasEndedQuiz) && <Header />}
      <div className="flex flex-col items-center p-2 md:p-12">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
