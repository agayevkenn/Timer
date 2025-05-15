import React, { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [breaks, setBreaks] = useState([]);

  useEffect(() => {
    let interval;
    if (active && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active, totalSeconds]);

  useEffect(() => {
    if (active && totalSeconds == 0) {
      setActive(false);
      alert("Time is done!");
    }
  }, [totalSeconds, active]);

  useEffect(() => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    setHours(hrs);
    setMinutes(mins);
    setSeconds(secs);
  }, [totalSeconds]);

  const startTimer = () => {
    const total = (parseInt(hours || 0) * 3600) + (parseInt(minutes || 0) * 60) + parseInt(seconds || 0);
    setTotalSeconds(total);
    setActive(true);
  };

  const stopTimer = () => {
    setActive(false);
    setBreaks([...breaks, `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`]);
  };

  return (
    <div className="time-container">
      <div className="btn-group">
        <button onClick={startTimer} className="btn">Start</button>
        <button onClick={stopTimer} className="btn">Stop</button>
      </div>
      <div className="time-box">
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="input-time"
        />
      </div>
      <div className="time-box">
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="input-time"
        />
      </div>
      <div className="time-box">
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="input-time"
        />
      </div>
      <div className="breaks">
        {breaks.map((brk, i) => (
          <div key={i}>Break {i + 1}: {brk}</div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
