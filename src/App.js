import React,{ useState, useEffect } from "react";



function App() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);


  const minutesTimer = minutes < 10 ? `0${minutes}`: minutes;
  const secondsTimer = seconds < 10 ? `0${seconds}`: seconds;

  useEffect(()=>{
    if(start){
      const interval = setInterval(()=>{
        clearInterval(interval);
        setSeconds(seconds + 1)
        if(seconds === 59){
          setSeconds(0);
          setMinutes(minutes + 1)
        }
      },1000)
      setReset(true)
    }
  },[seconds,start])


  const resetButton = ()=>{
    setReset(true)
    if(reset){
      if(start){
        setReset(false)
      }
      else{
        setMinutes(0);
        setSeconds(0)
      }
    }
  }
  return (
    <>
      <div className="wrapper">
        <h1>Stop Watch</h1>
        <div className="time">
          <h1>{minutesTimer}:{secondsTimer}</h1>
        </div>
        <div className="btn-container">
          {!start ? <button onClick={()=>{setStart(!start)}}>Start</button>:    <button onClick={()=>{setStart(!start)}}>Stop</button>}
          <button onClick={resetButton}>Reset</ button>
        </div>
      </div>
    </>
  );
}

export default App;
