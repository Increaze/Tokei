import React, { useState, useEffect } from "react";
import ControlTimeComponent from "./Component/Controls/ControlComponent";
import CalculateTime from "./Component/Utils/CalculateTimer";

function App() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = CalculateTime(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <main className="bg-gray-900 h-screen flex flex-col justify-center items-center">
      <section className="flex text-white text-7xl tracking-widest">
        <p>{timerArray[0]}</p>
        <span className="relative bottom-1">:</span>
        <p>{timerArray[1]}</p>
        <span className="relative bottom-1">:</span>
        <p>{timerArray[2]}</p>
      </section>
      <ControlTimeComponent setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
}

export default App;
