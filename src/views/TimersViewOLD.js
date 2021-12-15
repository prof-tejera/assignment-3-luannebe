import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import styled from "styled-components";
import AppContext from "../context/app-context";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { Container, Nav } from "../utils/containers";
import { NavButton } from "../components/generic";
import TinkWav from "../sounds/tink.wav";

const tink = new Audio(TinkWav);

function App() {
  const [timerType, setTimerType] = useState("stopwatch");
  const [mode, setMode] = useState("specify");
  const [currentTime, setCurrentTime] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [isRestPeriod, setIsRestPeriod] = useState(false);
  const [workoutLength, setWorkoutLength] = useState(0);
  const [restLength, setRestLength] = useState(0);

  // set by user
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [restSeconds, setRestSeconds] = useState(0);
  const [restMinutes, setRestMinutes] = useState(0);
  const [rounds, setRounds] = useState(0);

  // Timers
  useEffect(() => {
    let timerId;
    if (isRunning) {
      ///// STOPWATCH
      if (timerType === "stopwatch") {
        if (currentTime === 0) {
          setCurrentTime(1);
        }
        timerId = setInterval(() => {
          if (currentTime === workoutLength) {
            setMode("celebrate");
            setIsRunning(false);
          }
          setCurrentTime(currentTime + 1);
        }, 1000);
        ///// XY
      } else if (timerType === "xy") {
        timerId = setInterval(() => {
          if (currentRound === rounds && currentTime === 0) {
            setMode("celebrate");
            setIsRunning(false);
          } else {
            if (currentTime > 0) {
              setCurrentTime(currentTime - 1);
            } else {
              setCurrentRound(currentRound + 1);
              setCurrentTime(workoutLength);
            }
          }
        }, 1000);
        ///// Tabata
      } else if (timerType === "tabata") {
        timerId = setInterval(() => {
          if (currentRound === rounds && currentTime === 0) {
            setMode("celebrate");
            setIsRunning(false);
          } else {
            if (currentTime > 0) {
              if (currentTime > restLength + 1) {
                setIsRestPeriod(false);
              } else {
                setIsRestPeriod(true);
              }
              setCurrentTime(currentTime - 1);
            } else {
              setCurrentRound(currentRound + 1);
              setCurrentTime(workoutLength + restLength);
              setIsRestPeriod(false);
            }
          }
        }, 1000);
        ///// COUNTDOWN
      } else {
        timerId = setInterval(() => {
          if (currentTime === 1) {
            setMode("celebrate");
            tink.play();
            setIsRunning(false);
          }
          setCurrentTime(currentTime - 1);
        }, 1000);
      }
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [
    isRunning,
    currentTime,
    currentRound,
    restLength,
    rounds,
    timerType,
    workoutLength,
  ]);

  // Countdown
  const onStart = (e) => {
    let wtime = hours * 3600 + minutes * 60 + seconds;
    setWorkoutLength(wtime);
    setMode("run");
    setCurrentTime(wtime);
    setIsRunning(true);
  };

  const onStartXY = (e) => {
    let wtime = hours * 3600 + minutes * 60 + seconds;
    setWorkoutLength(wtime);
    setCurrentTime(wtime);
    setCurrentRound(1);
    setIsRunning(true);
    setMode("run");
  };

  const onStartTabata = (e) => {
    let wtime = minutes * 60 + seconds;
    let rtime = restMinutes * 60 + restSeconds;
    setWorkoutLength(wtime);
    setRestLength(rtime);
    setCurrentTime(wtime + rtime);
    setCurrentRound(1);
    setIsRunning(true);
    setIsRestPeriod(false);
    setMode("run");
  };

  const onStartStopwatch = (e) => {
    let wtime = hours * 3600 + minutes * 60 + seconds;
    setWorkoutLength(wtime);
    setCurrentTime(0);
    setIsRunning(true);
    setMode("run");
  };

  const togglePause = (e) => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  const onStop = (e) => {
    setIsRunning(false);
    setMode("celebrate");
  };

  const handleChangeSec = (e) => {
    setSeconds(parseInt(e.target.value));
  };
  const handleChangeMinutes = (e) => {
    setMinutes(parseInt(e.target.value));
  };
  const handleChangeHours = (e) => {
    setHours(parseInt(e.target.value));
  };
  const handleChangeRestMinutes = (e) => {
    setRestMinutes(parseInt(e.target.value));
  };
  const handleChangeRestSec = (e) => {
    setRestSeconds(parseInt(e.target.value));
  };
  const handleChangeRounds = (e) => {
    setRounds(parseInt(e.target.value));
  };

  const handleChangeTimer = (e) => {
    // set timer configuration when user picks a timer
    configureTimer(e.target.innerText);
  };

  const handleRepeatTimer = (e) => {
    setIsRunning(false);
    setMode("specify");
    console.log("changing mode");
  };

  const configureTimer = (selectedTimer) => {
    setMode("specify");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setWorkoutLength(0);
    setRestMinutes(0);
    setRestSeconds(0);
    setRounds(0);
    switch (selectedTimer) {
      case "Stopwatch":
        setTimerType("stopwatch");
        break;
      case "Countdown":
        setTimerType("countdown");
        break;
      case "XY":
        setTimerType("xy");
        break;
      case "Tabata":
        setTimerType("tabata");
        break;
      default:
        setTimerType("stopwatch");
    }
  };
  // renderTimer when config is changed (by user picking a timer)
  const renderTimer = (props) => {
    switch (timerType) {
      case "stopwatch":
        return <Stopwatch />;
      //break;
      case "countdown":
        return <Countdown />;
      //break;
      case "xy":
        return <XY />;
      //break;
      case "tabata":
        return <Tabata />;
      //break;
      default:
        return <Stopwatch />;
    }
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        currentTime,
        setCurrentTime,
        currentRound,
        setCurrentRound,
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        restMinutes,
        setRestMinutes,
        restSeconds,
        setRestSeconds,
        rounds,
        setRounds,
        isRunning,
        setIsRunning,
        isRestPeriod,
        setIsRestPeriod,
        onStart,
        onStartStopwatch,
        onStartXY,
        onStartTabata,
        onStop,
        togglePause,
        handleRepeatTimer,
        workoutLength,
        setWorkoutLength,
        restLength,
        setRestLength,
        handleChangeSec,
        handleChangeMinutes,
        handleChangeHours,
        handleChangeRestMinutes,
        handleChangeRestSec,
        handleChangeRounds,
      }}
    >
      <Container>
        <Nav>
          <Link to="/add">Add a Timer</Link>
          <NavButton onClick={handleChangeTimer} label="Stopwatch" />
          <NavButton onClick={handleChangeTimer} label="Countdown" />
          <NavButton onClick={handleChangeTimer} label="XY" />
          <NavButton onClick={handleChangeTimer} label="Tabata" />
        </Nav>
        {renderTimer()}
      </Container>
    </AppContext.Provider>
  );
}
//
export default App;
