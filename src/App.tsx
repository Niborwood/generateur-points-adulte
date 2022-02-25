import { useState } from "react";

// COMPONENT IMPORTS
import Header from "./components/header/";
import Card from "./components/card/";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex-col min-h-screen font-headings bg-gradient-to-bl from-purple-700 via-fucshia-700 to-pink-700">
      <Header />
      <div className="p-6">
        {/* <h2 className="mb-8 font-bold leading-6 text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2> */}
        <Card />
      </div>
    </div>
  );
}

export default App;
