import React, { useState } from 'react';

type Props = {
    setTimeInSeconds: Function 
}
function ControlTimeComponent(props:Props){
    const { setTimeInSeconds } = props;
    const [ intervalId, setIntervalId ] = useState<number>(0);
   
    const handlePlayButton = () => {
        let interval: any = setInterval(() =>{
        setTimeInSeconds((previousState: number) => previousState + 1);
    },1000);

    console.log("------I played" );
    console.log("number is ",interval)
        setIntervalId(interval)

        console.log("number is ",setIntervalId(interval))
    }
    const handleStopButton = () => {
        console.log("------I stopped" );
        clearInterval(intervalId);
    }
    
    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0 + 0);
        console.log("------Reset was successful");

    }
   
    return(
        <section >
            <button onClick={handleStopButton} className="m-4 bg-red-500 px-6 py-3 text-white text-xl  cursor-pointer rounded">PAUSE</button>
            <button onClick={handleResetButton} className="m-4 bg-blue-500 px-6 py-3 text-white text-xl cursor-pointer rounded">RESET</button>
            <button onClick={handlePlayButton} className="m-4 bg-green-600 px-6 py-3 text-white text-xl cursor-pointer rounded">START</button>

        </section>
    )
}
export default ControlTimeComponent;