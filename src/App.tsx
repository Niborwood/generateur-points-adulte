import { useState, useEffect } from "react";

// COMPONENT IMPORTS
import Header from "./components/header/";
import Quiz from "./components/quiz/quiz";

function App() {
  // useEffect(async () => {
  //   const data = await fetchData();
  //   setData(data);
  // }, []);

  // const fetchData = () => {
  //   return JSON.parse(data);
  // };

  return (
    <div className="flex-col min-h-screen font-headings bg-gradient-to-bl from-purple-700 via-fucshia-700 to-pink-700">
      <Header />
      <div className="p-6">
        {/* <h2 className="mb-8 font-bold leading-6 text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2> */}
        <Quiz />
      </div>
    </div>
  );
}

export default App;
