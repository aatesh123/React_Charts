import React, { useState } from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    if (!timerId) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setTimerId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const clearTimer=()=>{
    clearInterval(timerId);
    setTimerId(null);
    setTime(0);
  }

  return (
    <div>
      <h2>Timer: {time}s</h2>
      <button onClick={startTimer}>
        {time === 0 ? 'Start Timer' : 'Resume Timer'}
      </button>
      <button onClick={stopTimer}>Stop Timer</button>
      {time!=0 ? <button onClick={clearTimer}>Clear Timer</button> : ''}
    </div>
  );
};

export default TimerComponent;
