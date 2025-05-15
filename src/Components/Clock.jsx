import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-container">
      <div className="time-box">{String(time.getHours()).padStart(2, '0')}</div>
      <div className="time-box">{String(time.getMinutes()).padStart(2, '0')}</div>
      <div className="time-box">{String(time.getSeconds()).padStart(2, '0')}</div>
    </div>
  );
};

export default Clock;