// COMPONENT IMPORTS
import Header from "./components/header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex-col min-h-screen font-headings bg-gradient-to-bl from-purple-700 via-fuchsia-700 to-pink-700">
      <Header />
      <div className="p-12">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
