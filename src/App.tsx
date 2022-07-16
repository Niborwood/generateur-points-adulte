import { useState, useEffect } from "react";

// COMPONENT IMPORTS
import Header from "./components/header/";
import Quiz from "./components/quiz/quiz";

function App() {
  return (
    <div className="flex-col min-h-screen font-headings bg-gradient-to-bl from-purple-700 via-fuchsia-700 to-pink-700">
      <Header />
      <div className="p-12">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
