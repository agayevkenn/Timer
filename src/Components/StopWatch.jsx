import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [breaks, setBreaks] = useState([]);

  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = (s) => {
    const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
    const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return [hrs, mins, secs];
  };

  const [hrs, mins, secs] = formatTime(seconds);

  return (
    <div className="time-container">
      <div className="btn-group">
        <button onClick={() => setActive(true)} className="btn">Start</button>
        <button onClick={() => {
          setActive(false);
          setBreaks([...breaks, `${hrs}:${mins}:${secs}`]);
        }} className="btn">Stop</button>
      </div>
      <div className="time-box">{hrs}</div>
      <div className="time-box">{mins}</div>
      <div className="time-box">{secs}</div>
      <div className="breaks">{breaks.map((brk, i) => <div key={i}>Break {i+1}: {brk}</div>)}</div>
    </div>
  );
};

export default Stopwatch;