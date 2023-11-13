import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 gap-3 px-2">
        <div
          onClick={() => setColor("red")}
          className="flex flex-wrap justify-center shadow-lg bg-red-700 px-10 py-2 rounded-3xl"
        >
          Red
        </div>
        <div
          onClick={() => setColor("cyan")}
          className="flex flex-wrap justify-center shadow-lg bg-cyan-200 px-10 py-2 rounded-3xl"
        >
          Cyan
        </div>
        <div
          onClick={() => setColor("yellow")}
          className="flex flex-wrap justify-center shadow-lg bg-yellow-700 px-10 py-2 rounded-3xl"
        >
          Yellow
        </div>
        <div
          onClick={() => setColor("blue")}
          className="flex flex-wrap justify-center shadow-lg bg-blue-400 px-10 py-2 rounded-3xl"
        >
          blue
        </div>
        <div
          onClick={() => setColor("orange")}
          className="flex flex-wrap justify-center shadow-lg bg-orange-300 px-10 py-2 rounded-3xl"
        >
          orange
        </div>
        <div
          onClick={() => setColor("purple")}
          className="flex flex-wrap justify-center shadow-lg bg-purple-700 px-10 py-2 rounded-3xl"
        >
          purple
        </div>
        <div
          onClick={() => setColor("pink")}
          className="flex flex-wrap justify-center shadow-lg bg-pink-700 px-10 py-2 rounded-3xl"
        >
          pink
        </div>
      </div>
    </div>
  );
}

export default App;
