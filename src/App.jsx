import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Clock from "./Components/Clock";
import Stopwatch from "./Components/StopWatch";
import Timer from "./Components/Timer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavLink to="/">Time</NavLink>
        <NavLink to="/stopwatch">Stop Watch</NavLink>
        <NavLink to="/timer">Timer</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
};

export default App;
